import React from 'react';
import GalGrids from "./GalGrids";


function Gallery(props) {

  return (
    <div>
      <h1>Gallery</h1>
      <GalGrids
      // This is where we pass props?
      />
    </div>
  );
}

export default Gallery;