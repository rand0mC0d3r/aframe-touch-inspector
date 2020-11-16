import React from 'react';
import PropTypes from 'prop-types';
import PropertyRow from './../PropertyRow';
import Clipboard from 'clipboard';
import { getComponentClipboardRepresentation } from '../../../lib/entity';
import Events from '../../../lib/Events';

import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  ComponentTitle,
  TitleContainer,
  DocumentationContainer,
  ButtonsContainer,
  DocuLabel,
  DocuIcon,
} from './styles.jsx';

const isSingleProperty = AFRAME.schema.isSingleProperty;

const documentation = [
  {
    key: 'geometry',
    links: [
      {
        title: 'A-Frame Geometry',
        url: 'https://aframe.io/docs/1.0.0/components/geometry.html',
      }
    ]
  },
  {
    key: 'animation',
    links: [
      {
        title: 'A-Frame Animation',
        url: 'https://aframe.io/docs/1.0.0/components/animation.html',
      }
    ]
  },
  {
    key: 'material',
    links: [
      {
        title: 'A-Frame Material',
        url: 'https://aframe.io/docs/1.0.0/components/material.html',
      }
    ]
  },
  {
    key: 'light',
    links: [
      {
        title: 'A-Frame Material',
        url: 'https://aframe.io/docs/1.0.0/components/light.html',
      }
    ]
  }
];
/**
 * Single component.
 */
export default class Component extends React.Component {
  static propTypes = {
    component: PropTypes.any,
    entity: PropTypes.object,
    isCollapsed: PropTypes.bool,
    name: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      entity: this.props.entity,
      name: this.props.name
    };
  }

  componentDidMount() {
    var clipboard = new Clipboard(
      '[data-action="copy-component-to-clipboard"]',
      {
        text: trigger => {
          var componentName = trigger
            .getAttribute('data-component')
            .toLowerCase();
          return getComponentClipboardRepresentation(
            this.state.entity,
            componentName
          );
        }
      }
    );
    clipboard.on('error', e => {
      // @todo Show the error in the UI
      console.error(e);
    });

    Events.on('entityupdate', detail => {
      if (detail.entity !== this.props.entity) {
        return;
      }
      if (detail.component === this.props.name) {
        this.forceUpdate();
      }
    });
  }

  componentWillReceiveProps(newProps) {
    if (this.state.entity !== newProps.entity) {
      this.setState({ entity: newProps.entity });
    }
    if (this.state.name !== newProps.name) {
      this.setState({ name: newProps.name });
    }
  }

  removeComponent = event => {
    var componentName = this.props.name;
    event.stopPropagation();
    if (
      confirm('Do you really want to remove component `' + componentName + '`?')
    ) {
      this.props.entity.removeAttribute(componentName);
      Events.emit('componentremove', {
        entity: this.props.entity,
        component: componentName
      });
    }
  };

  /**
   * Render propert(ies) of the component.
   */
  renderPropertyRows = () => {
    const componentData = this.props.component;

    if (isSingleProperty(componentData.schema)) {
      const componentName = this.props.name;
      const schema = AFRAME.components[componentName.split('__')[0]].schema;
      return (
        <PropertyRow
          key={componentName}
          name={componentName}
          schema={schema}
          data={componentData.data}
          componentname={componentName}
          isSingle={true}
          entity={this.props.entity}
        />
      );
    }

    return Object.keys(componentData.schema)
      .sort()
      .map(propertyName => (
        <PropertyRow
          key={propertyName}
          name={propertyName}
          schema={componentData.schema[propertyName]}
          data={componentData.data[propertyName]}
          componentname={this.props.name}
          isSingle={false}
          entity={this.props.entity}
        />
      ));
  };

  render() {
    let componentName = this.props.name;
    let subComponentName = '';
    if (componentName.indexOf('__') !== -1) {
      subComponentName = componentName;
      componentName = componentName.substr(0, componentName.indexOf('__'));
    }

    return <React.Fragment>
      <div className="componentHeader collapsible-header">
        <TitleContainer>
          <ComponentTitle title={subComponentName || componentName}>
            <span>{subComponentName || componentName}</span>
          </ComponentTitle>
          <DocumentationContainer>
            {documentation.filter(d => d.key === this.props.name).map((d, i) => <React.Fragment key={i}>
              <DocuLabel>DOCS</DocuLabel>
              {d.links.map((link, i) => <React.Fragment key={i}>
                <a href={link.url} target="_blank" title={link.title}>
                  <DocuIcon size="sm" icon={faExternalLinkAlt}/>
                </a>
              </React.Fragment>)}
            </React.Fragment>)}
          </DocumentationContainer>
          <ButtonsContainer>
            <IconButton
              onClick={this.removeComponent}
              title="Remove component"
            >
              <FontAwesomeIcon size="xs" icon={faTrash}/>
            </IconButton>
          </ButtonsContainer>
        </TitleContainer>
      </div>
      <div className="collapsible-content">
        {this.renderPropertyRows()}
      </div>
    </React.Fragment>;
  }
}
