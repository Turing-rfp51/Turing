import React from 'react';

class NewReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 'b',
    };
  }

  render() {
    const { metadata, productName, toggleShowNewReviewModal } = this.props;
    return (
      <div className='newReviewModalBackgroundContainer'>
        <div className='newReviewModalContainer'>
          <input type='text'></input>
        </div>
      </div>
    );
  }
}

export default NewReviewModal;
