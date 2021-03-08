/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';
import ImageModal from './ImageModal.jsx';
import ImageViewBox from './ImageViewBox.jsx';

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
  }

  render() {
    const { photos } = this.props;
    const { selectedIndex, expanded } = this.state;
    if (photos) {
      return (
        <>
          <div className='imagePreviewContainer' onClick={this.toggleModal}>
            <ImageViewBox photos={photos} selectedIndex={selectedIndex} />
          </div>
          <ImageModal
            toggleModal={this.toggleModal}
            expanded={expanded}
            photos={photos}
            selectedIndex={selectedIndex}
          />
        </>
      );
    }
    return null;
  }
}

export default ImagePreview;
