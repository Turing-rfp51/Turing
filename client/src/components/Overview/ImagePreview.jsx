/* eslint-disable react/no-unused-state */
import React from 'react';

class ImagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  render() {
    return <span className='imagePreviewContainer'>ImagePreviewHere</span>;
  }
}

export default ImagePreview;
