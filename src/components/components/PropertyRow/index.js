import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import Events from '../../../lib/Events';

import BooleanWidget from '../../widgets/BooleanWidget';
import ColorWidget from '../../widgets/ColorWidget';
import InputWidget from '../../widgets/InputWidget';
import NumberWidget from '../../widgets/NumberWidget';
import SelectWidget from '../../widgets/SelectWidget';
import TextureWidget from '../../widgets/TextureWidget';
import Vec4Widget from '../../widgets/Vec4Widget';
import Vec3Widget from '../../widgets/Vec3Widget';
import Vec2Widget from '../../widgets/Vec2Widget';
import { updateEntity } from '../../../lib/entity';

import { PropertyContainer, PropertyIcon, PropertyLabel, PropertyWidget } from './styles.jsx';

export default class PropertyRow extends React.Component {
  static propTypes = {
    componentname: PropTypes.string.isRequired,
    id: PropTypes.string,
    icon: PropTypes.any,
    name: PropTypes.string.isRequired,
    schema: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.id = props.componentname + ':' + props.name;

    if (
      [ 'position', 'rotation', 'scale' ].indexOf(this.props.componentname) !== -1
    ) {
      Events.on(
        'entitytransformed',
        debounce(entity => {
          if (entity === props.entity) {
            this.forceUpdate();
          }
        }, 250)
      );
    }
  }

  getWidget() {
    const props = this.props;
    const isMap =
      props.componentname === 'material' &&
      (props.name === 'envMap' || props.name === 'src');
    const type = props.schema.type;

    const value =
      props.schema.type === 'selector'
        ? props.entity.getDOMAttribute(props.componentname)[props.name]
        : props.data;

    const widgetProps = {
      componentname: props.componentname,
      entity: props.entity,
      isSingle: props.isSingle,
      name: props.name,
      // Wrap updateEntity for tracking.
      onChange: function(name, value) {
        var propertyName = props.componentname;
        if (!props.isSingle) {
          propertyName += '.' + props.name;
        }

        updateEntity.apply(this, [ props.entity, propertyName, value ]);
      },
      value: value
    };
    const numberWidgetProps = {
      min: props.schema.hasOwnProperty('min') ? props.schema.min : -Infinity,
      max: props.schema.hasOwnProperty('max') ? props.schema.max : Infinity
    };

    if (props.schema.oneOf && props.schema.oneOf.length > 0) {
      return <SelectWidget {...widgetProps} options={props.schema.oneOf} />;
    }
    if (type === 'map' || isMap) {
      return <TextureWidget {...widgetProps} />;
    }

    switch (type) {
    case 'number': {
      return <NumberWidget {...widgetProps} {...numberWidgetProps} />;
    }
    case 'int': {
      return (
        <NumberWidget {...widgetProps} {...numberWidgetProps} precision={0} />
      );
    }
    case 'vec2': {
      return <Vec2Widget {...widgetProps} />;
    }
    case 'vec3': {
      return <Vec3Widget {...widgetProps} />;
    }
    case 'vec4': {
      return <Vec4Widget {...widgetProps} />;
    }
    case 'color': {
      return <ColorWidget {...widgetProps} />;
    }
    case 'boolean': {
      return <BooleanWidget {...widgetProps} />;
    }
    default: {
      return <InputWidget {...widgetProps} />;
    }
    }
  }

  render() {
    const props = this.props;
    const value =
      props.schema.type === 'selector'
        ? props.entity.getDOMAttribute(props.componentname)[props.name]
        : JSON.stringify(props.data);
    const title =
      props.name + '\n - type: ' + props.schema.type + '\n - value: ' + value;

    const className = classnames({
      propertyRow: true,
      propertyRowDefined: props.isSingle
        ? !!props.entity.getDOMAttribute(props.componentname)
        : props.name in
          (props.entity.getDOMAttribute(props.componentname) || {})
    });

    return <PropertyContainer className={className}>
      {props.icon && <PropertyIcon size="sm" icon={props.icon} fixedWidth />}
      <PropertyLabel htmlFor={this.id} title={title}>
        {props.name.split(/(?=[A-Z])/).join(' ')}
      </PropertyLabel>
      <PropertyWidget>
        {this.getWidget(props.schema.type)}
      </PropertyWidget>
    </PropertyContainer>;
  }
}
