import React from 'react';
// import Events from '../../../lib/Events';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { IconButton } from '@material-ui/core';

export default () => {
  const renderPayload = () => {
    let elements = [];

    window.AFRAME.INSPECTOR.scene.children.map(child => {
      if(child.el && child.el.outerHTML) {
        if(child.el.id !== 'aframeInspectorMouseCursor') {
          const htmlSection = child.el.outerHTML;
          elements.push(htmlSection);
        }
      }
    })

    window.postMessage(elements, "*");
  }

  return <IconButton onClick={renderPayload} title={`Add new Entity`} >
      <FontAwesomeIcon icon={faCode} size="sm" />
   </IconButton>;
};