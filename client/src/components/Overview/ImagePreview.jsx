/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';
import ImageModal from './ImageModal.jsx';
import ThumbnailScroll from './ThumbnailScroll.jsx'

class ImagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      expanded: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((state) => ({ expanded: !state.expanded }));
    console.log(this.state);
  }

  render() {
    const { photos } = this.props;
    const { selectedIndex, expanded } = this.state;
    if (photos) {
      return (
        <>
        <span className='imagePreviewContainer'>
          <img
            src={photos[selectedIndex].url}
            alt=''
            className='selectedImage'
            onClick={this.toggleModal}
          />
          <ThumbnailScroll/>
        </span>
        <ImageModal toggleModal={this.toggleModal} expanded={expanded} />
        </>
      );
    }
    return null;
  }
}

export default ImagePreview;
