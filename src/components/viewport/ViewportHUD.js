var React = require('react');
var Events = require('../../lib/Events.js');
import { printEntity } from '../../lib/entity';

export default class ViewportHUD extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hoveredEntity: null,
      selectedEntity: null
    };
  }

  componentDidMount () {
    console.log("ttttt");
    Events.on('raycastermouseenter', el => {
      debugger;
      this.setState({ hoveredEntity: el });
    });

    Events.on('raycastermouseleave', el => {
      debugger;
      this.setState({ hoveredEntity: el });
    });
  }

  render () {
    return (
      <div id="viewportHud">
        <p>{printEntity(this.state.hoveredEntity)}</p>
      </div>
    );
  }
}
