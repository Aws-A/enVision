import React from 'react';
import WorldMapSVG from './images/WorldMap.svg';

const WorldMapFunc = () => (
  <object type="image/svg+xml" data={WorldMapSVG} id="map">
  {/* Fallback content for browsers that do not support SVG */}
  Your browser does not support SVG.
</object>
);


export default WorldMapFunc;
