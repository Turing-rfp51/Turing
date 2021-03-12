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
      hidePrev: 'hideButton',
      hideNext: false,
      move: '',
      nextInd: 0,
      moving: false,
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
    this.selectInd(selectedIndex + 1, 'moveLeft');
  }

  selectPrev() {
    const { selectedIndex, hidePrev } = this.state;
    if (hidePrev) {
      return;
    }
    this.selectInd(selectedIndex - 1, 'moveRight');
  }

  selectInd(nextInd, move) {
    const { photos } = this.props;
    const { moving } = this.state;

    const finish = () => {
      if (photos.length === 1) {
        this.setState({
          hidePrev: 'hideButton',
          hideNext: 'hideButton',
          selectedIndex: nextInd,
          move: '',
          moving: false,
        });
      } else if (nextInd === 0) {
        this.setState({
          hidePrev: 'hideButton',
          hideNext: false,
          selectedIndex: nextInd,
          move: '',
          moving: false,
        });
      } else if (nextInd === photos.length - 1) {
        this.setState({
          hidePrev: false,
          hideNext: 'hideButton',
          selectedIndex: nextInd,
          move: '',
          moving: false,
        });
      } else {
        this.setState({
          hidePrev: false,
          hideNext: false,
          selectedIndex: nextInd,
          move: '',
          moving: false,
        });
      }
    };
    const run = () => {
      this.setState({ move, nextInd, moving: true });
      setTimeout(finish, 300);
    };
    return !moving ? run() : null;
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
    const { selectedIndex, hideNext, hidePrev, move, nextInd } = this.state;
    return photos ? (
      <>
        <div className='imagePreviewContainer' onKeyDown={this.arrowKeyHandler} tabIndex='0'>
          <ImageViewer
            move={move}
            photos={photos}
            hidePrev={hidePrev}
            selectPrev={this.selectPrev}
            hideNext={hideNext}
            selectNext={this.selectNext}
            selectedIndex={selectedIndex}
            toggleModal={this.toggleModal}
            nextInd={nextInd}
          />
          <ThumbnailScroll
            photos={photos}
            selectInd={this.selectInd}
            selectedIndex={selectedIndex}
            startInd={3}
          />
        </div>
      </>
    ) : null;
  }
}

export default ImagePreview;
