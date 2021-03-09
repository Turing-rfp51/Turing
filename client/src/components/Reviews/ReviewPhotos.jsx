/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

class reviewPhotos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPhoto: null,
    };
  }

  render() {
    const { review } = this.props;
    const { selectedPhoto } = this.state;
    return (
      <React.Fragment>
        {selectedPhoto && (
          <div
            className='reviewExpandedPhotoModal'
            onClick={() => this.setState({ selectedPhoto: null })}
          >
            <img
              className='reviewSelectedImage'
              src={selectedPhoto.url}
              alt='product'
              key={selectedPhoto.id}
            />
          </div>
        )}
        <div className='reviewImageContainer'>
          {review.photos.map((p) => (
            <img
              className='reviewImage'
              src={p.url}
              alt='product'
              key={p.id}
              onClick={() => this.setState({ selectedPhoto: p })}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default reviewPhotos;
