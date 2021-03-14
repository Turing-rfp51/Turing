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
      thumbInd: 0,
      moveThumb: '',
      scroll: 'hideScroll',
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.selectPrev = this.selectPrev.bind(this);
    this.selectNext = this.selectNext.bind(this);
    this.arrowKeyHandler = this.arrowKeyHandler.bind(this);
    this.selectInd = this.selectInd.bind(this);
    this.nextThumbClick = this.nextThumbClick.bind(this);
    this.prevThumbClick = this.prevThumbClick.bind(this);
    this.checkPhotosLength = this.checkPhotosLength.bind(this);
    this.setThumbScroll = this.setThumbScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkPhotosLength);
    this.setThumbScroll();
  }

  setThumbScroll() {
    const { photos } = this.props;
    if (photos) {
      return this.checkPhotosLength();
    }
    return setTimeout(this.setThumbScroll, 10);
  }

  toggleModal() {
    this.setState((state) => ({ expanded: !state.expanded }));
    console.log('Modal selected');
  }

  checkPhotosLength() {
    const elWidth = document.getElementById('thumbnailScroll').offsetWidth;
    const scrWidth = document.getElementById('thumbnailScroll').scrollWidth;
    if (scrWidth > elWidth) {
      this.setState({ scroll: 'displayScroll' });
    } else {
      this.setState({ scroll: 'hideScroll' });
    }
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

  nextThumbClick() {
    const { moveThumb } = this.state;
    const run = () => {
      this.setState({ moveThumb: 'moveLeft' });
      setTimeout(
        () => this.setState((state) => ({ moveThumb: '', thumbInd: state.thumbInd + 1 })),
        300
      );
    };
    return moveThumb === '' ? run() : null;
  }

  prevThumbClick() {
    const { moveThumb } = this.state;
    const run = () => {
      this.setState({ moveThumb: 'moveRight' });
      setTimeout(
        () => this.setState((state) => ({ moveThumb: '', thumbInd: state.thumbInd - 1 })),
        300
      );
    };
    return moveThumb === '' ? run() : null;
  }

  render() {
    const { photos } = this.props;
    const {
      selectedIndex,
      hideNext,
      hidePrev,
      move,
      nextInd,
      thumbInd,
      moveThumb,
      scroll,
    } = this.state;
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
            startInd={thumbInd > -1 ? thumbInd : photos.length + thumbInd}
            scroll={scroll}
            nextThumbClick={this.nextThumbClick}
            prevThumbClick={this.prevThumbClick}
            move={moveThumb}
          />
        </div>
      </>
    ) : null;
  }
}

export default ImagePreview;
