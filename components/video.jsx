import React from 'react';

function GifViewer() {
  return (
    <div>
      {/* <h1>GIF Viewer</h1> */}
      <img src="/video.gif" alt="Terabyte GIF"
      style={{ width: '100px', height: '100px' }} // Adjust width and height as needed
      />
    </div>
  );
}

export default GifViewer;
