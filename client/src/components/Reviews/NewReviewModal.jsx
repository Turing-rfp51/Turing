/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

import axios from 'axios';

import ReviewUploadImages from './ReviewUploadImages.jsx';
import ReviewCharacteristicsInput from './ReviewCharacteristicsInput.jsx';
import ReviewRatingInput from './ReviewRatingInput.jsx';

const { TOKEN } = require('../../../../config.js');

class NewReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoURLs: [],
      selectedCharacteristics: {},
      email: '',
      nickname: '',
      body: '',
      summary: '',
      recommend: true,
      rating: 0,
    };

    this.loadPhotos = this.loadPhotos.bind(this);
    this.updatePhotos = this.updatePhotos.bind(this);
    this.updateSelectedChar = this.updateSelectedChar.bind(this);
    this.updateStarRating = this.updateStarRating.bind(this);
  }

  loadPhotos() {
    const { files } = document.getElementById('nrmPhotoUpload');
    const fReader = new FileReader();

    [0, 1, 2, 3, 4].forEach((i) => {
      if (files[i]) {
        fReader.readAsDataURL(files[i]);

        fReader.onloadend = (event) => {
          const temp = event.target.result;
          this.updatePhotos(temp);
        };
      }
    });
  }

  updatePhotos(temp) {
    const { photoURLs } = this.state;
    this.setState({ photoURLs: [...photoURLs, temp] });
  }

  updateSelectedChar(char, value) {
    const { selectedCharacteristics } = this.state;
    const temp = Object.assign(selectedCharacteristics);
    temp[char] = value;
    this.setState({ selectedCharacteristics: temp }, () => console.log(selectedCharacteristics));
  }

  updateStarRating(n) {
    this.setState({ rating: n });
  }

  submitReview(e) {
    const { metadata } = this.props;
    const {
      photoURLs,
      selectedCharacteristics,
      summary,
      body,
      nickname,
      email,
      recommend,
      rating,
    } = this.state;

    const finalCharObj = {};
    for (const k in metadata.characteristics) {
      finalCharObj[metadata.characteristics[k].id] = selectedCharacteristics[k];
    }

    const reviewObj = {
      product_id: +metadata.product_id,
      rating,
      summary,
      body,
      recommend,
      name: nickname,
      email,
      photos: photoURLs,
      characteristics: finalCharObj,
    };
    axios({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews`,
      method: 'post',
      data: JSON.stringify(reviewObj),
      headers: {
        'Authorization': TOKEN,
        'Content-Type': 'application/json',
      },
    })
      .then((results) => console.log('submitted review', results))
      .catch((err) => console.error(err));
  }

  render() {
    const { metadata, productName, toggleShowNewReviewModal } = this.props;
    const { photoURLs, selectedCharacteristics, body, rating } = this.state;
    return (
      <div className='newReviewModalBackgroundContainer'>
        <form className='newReviewModalContainer' onSubmit={(e) => this.submitReview(e)}>
          <div className='newReviewModalHeaderContainer'>
            <h1 className='nrmTitle'>Write Your Review</h1>
            <h2 className='nrmSubtitle'>About {productName}</h2>
          </div>
          <br />
          <ReviewRatingInput updateStarRating={this.updateStarRating} rating={rating} />
          <br />
          <div className='reviewInputContainer'>
            <span>Do you recommend this product?*</span>
            <div>
              <input
                type='radio'
                id='nrmRecommendYes'
                name='recommend'
                value='yes'
                required
                onClick={() => this.setState({ recommend: true })}
              />
              <label htmlFor='nrmRecommendYes'>Yes</label>
              <input
                type='radio'
                id='nrmRecommendNo'
                name='recommend'
                value='no'
                onClick={() => this.setState({ recommend: false })}
              />
              <label htmlFor='nrmRecommendNo'>No</label>
            </div>
          </div>
          <br />
          <ReviewCharacteristicsInput
            characteristics={metadata.characteristics}
            selectedCharacteristics={selectedCharacteristics}
            updateSelectedChar={this.updateSelectedChar}
          />
          <label htmlFor='nrmSummary'>Review Summary</label>
          <textarea
            maxLength='60'
            id='nrmSummary'
            placeholder='Example: Best purchase ever!'
            onChange={(e) => this.setState({ summary: e.target.value })}
          />
          <br />
          <label htmlFor='nrmBody'>Review Body*</label>
          <textarea
            minLength='50'
            maxLength='1000'
            id='nrmBody'
            placeholder='Why did you like the product or not?'
            required
            onChange={(e) => this.setState({ body: e.target.value })}
          />
          <span className='nrmSmallText'>
            {body.length >= 50
              ? 'Minimum reached'
              : `Minimum  characters left: ${50 - body.length}`}
          </span>
          <br />
          <label htmlFor='npmPhotoUpload'>Upload Photos</label>
          <ReviewUploadImages photoURLs={photoURLs} loadPhotos={this.loadPhotos} />
          <br />
          <label htmlFor='nrmNickname'>What is your nickname*</label>
          <input
            type='text'
            id='nrmNickname'
            placeholder='Example: jackson11!'
            required
            onChange={(e) => this.setState({ nickname: e.target.value })}
          />
          <span className='nrmSmallText'>
            For privacy reasons, do not use your full name or email address
          </span>
          <br />
          <label htmlFor='nrmEmail'>Your email*</label>
          <input
            type='text'
            id='nrmEmail'
            placeholder='Example:  jackson11@email.com'
            required
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <span className='nrmSmallText'>For authentication reasons, you will not be emailed</span>
          <br />
          <div className='nrmButtonsContainer'>
            <button className='reviewsButton' type='submit'>
              Submit
            </button>
            <button type='button' className='reviewsButton' onClick={toggleShowNewReviewModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewReviewModal;
