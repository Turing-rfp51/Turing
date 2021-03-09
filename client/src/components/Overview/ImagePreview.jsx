/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';
import ThumbnailScroll from './ThumbnailScroll.jsx'

class ImagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      expanded: false,
      hidePrev: true,
      hideNext: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.selectPrev = this.selectPrev.bind(this);
    this.selectNext = this.selectNext.bind(this);
    this.arrowKeyHandler = this.arrowKeyHandler.bind(this)
  }

  toggleModal() {
    this.setState((state) => ({ expanded: !state.expanded }));
    console.log('Modal selected');
  }

  selectNext() {
    const { selectedIndex, hideNext } = this.state;
    const { photos } = this.props;
    this.setState({ hidePrev: false });
    if (hideNext) {
      return;
    }
    if (selectedIndex === photos.length - 2) {
      this.setState({ hideNext: true });
    }
    this.setState((state) => ({ selectedIndex: state.selectedIndex + 1 }));
  }

  selectPrev() {
    const { selectedIndex, hidePrev } = this.state;
    const { photos } = this.props;
    this.setState({ hideNext: false });
    if (hidePrev) {
      return;
    }
    if (selectedIndex === 1) {
      this.setState({ hidePrev: true });
    }
    this.setState((state) => ({ selectedIndex: state.selectedIndex - 1 }));
  }

  arrowKeyHandler(e) {
    if (e.keyCode === 39) {
      this.selectNext();
    }
    if (e.keyCode === 37) {
      this.selectPrev();
    }
    console.log('Keypress')
  }

  render() {
    const { photos } = this.props;
    const { selectedIndex, expanded, hideNext, hidePrev } = this.state;
    if (photos) {
      return (
        <>
          <div className='imagePreviewContainer' onKeyDown={this.arrowKeyHandler} tabIndex='0' >
            <>
              <div className='imageBox'>
                <div className='selectPrevImage' hidden={hidePrev} onClick={this.selectPrev}>
                  {`<`}
                </div>
                <div
                  className='selectNextImage'
                  hidden={hideNext}
                  onClick={this.selectNext}
                >{`>`}</div>
                <img
                  src={photos[selectedIndex].url}
                  alt=''
                  className='selectedImage'
                  onClick={this.toggleModal}
                />
              </div>
              <ThumbnailScroll/>
            </>
          </div>
        </>
      );
    }
    return null;
  }
}

export default ImagePreview;
