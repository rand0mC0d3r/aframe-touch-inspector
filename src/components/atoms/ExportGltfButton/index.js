import React from 'react';
import Events from '../../../lib/Events';
import { saveBlob } from '../../../lib/utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { IconButton } from '@material-ui/core';

export default () => {
   const filterHelpers = (scene, visible) => {
      scene.traverse(o => {
         if (o.userData.source === 'INSPECTOR') {
            o.visible = visible;
         }
      });
   }

   const slugify = (text) => {
      return text
         .toString()
         .toLowerCase()
         .replace(/\s+/g, '-') // Replace spaces with -
         .replace(/[^\w\-]+/g, '-') // Replace all non-word chars with -
         .replace(/\-\-+/g, '-') // Replace multiple - with single -
         .replace(/^-+/, '') // Trim - from start of text
         .replace(/-+$/, ''); // Trim - from end of text
   }

   const getSceneName = (scene) => {
       return scene.id || slugify(window.location.host + window.location.pathname);
   }

   const exportSceneToGLTF = () => {
      const sceneName = getSceneName(AFRAME.scenes[0]);
      const scene = AFRAME.scenes[0].object3D;
      filterHelpers(scene, false);
      AFRAME.INSPECTOR.exporters.gltf.parse(
         scene,
         (buffer) => {
            filterHelpers(scene, true);
            const blob = new Blob([buffer], { type: 'application/octet-stream' });
            saveBlob(blob, sceneName + '.glb');
         },
         { binary: true }
      );
   }

  return <IconButton onClick={exportSceneToGLTF} title="Save as .glb file" >
      <FontAwesomeIcon icon={faDownload} size="sm" />
   </IconButton>;
};