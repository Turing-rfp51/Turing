/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';
import ThumbnailScroll from './ThumbnailScroll.jsx';
import ImageViewer from './ImageViewer.jsx';

class ImagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      expanded: false,
      hidePrev: true,
      hideNext: false,
      moveClass: '',
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.selectPrev = this.selectPrev.bind(this);
    this.selectNext = this.selectNext.bind(this);
    this.arrowKeyHandler = this.arrowKeyHandler.bind(this);
    this.selectInd = this.selectInd.bind(this);
  }

  toggleModal() {
    this.setState((state) => ({ expanded: !state.expanded }));
    console.log('Modal selected');
  }

  selectNext() {
    const { selectedIndex, hideNext } = this.state;
    if (hideNext) {
      return;
    }
    this.selectInd(selectedIndex + 1, 'left');
  }

  selectPrev() {
    const { selectedIndex, hidePrev } = this.state;
    if (hidePrev) {
      return;
    }
    this.selectInd(selectedIndex - 1, 'right');
  }

  selectInd(ind, move) {
    const { photos } = this.props;
    const { selectedIndex } = this.state;
    let moveClass;
    if (move === 'right') {
      moveClass = 'moveRight';
    } else if (move === 'left') {
      moveClass = 'moveLeft';
    } else {
      moveClass = 'moveUp';
    }

    const finish = () => {
      if (photos.length === 1) {
        this.setState({ hidePrev: true, hideNext: true, selectedIndex: ind, moveClass: '' });
      } else if (ind === 0) {
        this.setState({ hidePrev: true, hideNext: false, selectedIndex: ind, moveClass: '' });
      } else if (ind === photos.length - 1) {
        this.setState({ hidePrev: false, hideNext: true, selectedIndex: ind, moveClass: '' });
      } else {
        this.setState({ hidePrev: false, hideNext: false, selectedIndex: ind, moveClass: '' });
      }
    };
    this.setState({ moveClass });
    setTimeout(finish, 1000);
  }

  arrowKeyHandler(e) {
    if (e.keyCode === 39) {
      this.selectNext();
    }
    if (e.keyCode === 37) {
      this.selectPrev();
    }
  }

  render() {
    const { photos } = this.props;
    const { selectedIndex, hideNext, hidePrev, moveClass } = this.state;
    return photos ? (
      <>
        <div className='imagePreviewContainer' onKeyDown={this.arrowKeyHandler} tabIndex='0'>
          <ImageViewer
            moveClass={moveClass}
            photos={photos}
            hidePrev={hidePrev}
            selectPrev={this.selectPrev}
            hideNext={hideNext}
            selectNext={this.selectNext}
            selectedIndex={selectedIndex}
            toggleModal={this.toggleModal}
          />
          <ThumbnailScroll
            photos={photos}
            selectInd={this.selectInd}
            selectedIndex={selectedIndex}
          />
        </div>
      </>
    ) : null;
  }
}

export default ImagePreview;
