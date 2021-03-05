/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

class NewReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currBodyChars: 0,
    };
  }

  render() {
    const { metadata, productName, toggleShowNewReviewModal } = this.props;
    const { currBodyChars } = this.state;
    return (
      <div className='newReviewModalBackgroundContainer'>
        <form className='newReviewModalContainer'>
          <div className='newReviewModalHeaderContainer'>
            <h1 className='nrmTitle'>Write Your Review</h1>
            <h2 className='nrmSubtitle'>About the {productName}</h2>
          </div>
          {/* Overall Rating Component here */}
          <div className='reviewInputContainer'>
            <span>Do you recommend this product?*</span>
            <input type='radio' id='nrmRecommendYes' name='recommend' value='yes' required />
            <label htmlFor='recommendYes'>Yes</label>
            <input type='radio' id='nrmRecommendNo' name='recommend' value='no' />
            <label htmlFor='recommendNo'>No</label>
          </div>
          {/* Characteristic radio buttons here */}
          <br />
          <label htmlFor='nrmSummary'>Review Summary</label>
          <textarea maxLength='60' id='nrmSummary' placeholder='Example: Best purchase ever!' />
          <br />
          <label htmlFor='nrmBody'>Review Body*</label>
          <textarea
            minLength='50'
            maxLength='1000'
            id='nrmBody'
            placeholder='Why did you like the product or not?'
            required
            onChange={(e) => this.setState({ currBodyChars: e.target.value.length })}
          />
          <span className='nrmSmallText'>
            {currBodyChars >= 50
              ? 'Minimum reached'
              : `Minimum required characters left: ${50 - currBodyChars}`}
          </span>
          {/* Upload photos component here */}
          <br />
          <label htmlFor='nrmNickname'>What is your nickname*</label>
          <input type='text' id='nrmNickname' placeholder='Example: jackson11!' required />
          <span className='nrmSmallText'>
            For privacy reasons, do not use your full name or email address
          </span>
          <br />
          <label htmlFor='nrmNickname'>Your email*</label>
          <input type='text' id='nrmEmail' placeholder='Example:  jackson11@email.com' required />
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
