import React from 'react';
import axios from 'axios';

const { TOKEN } = require('../../../../config.js');

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      nickname: '',
      email: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { body, nickname, email } = this.state;
    const { productId, getQA, close } = this.props;

    axios({
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/`,
      headers: {
        'product_id': productId,
        'Authorization': TOKEN,
        'Content-Type': 'application/json',
      },
      data: {
        'body': body,
        'name': nickname,
        'email': email,
        'product_id': productId,
      },
    })
      .then((response) => {
        console.log('success posting new question', response);
      })
      .catch((err) => {
        console.log('error posting question', err);
      })
      .then(() => {
        getQA();
        close();
      })
      .catch((err) => {
        console.log('error getting new question list', err);
      });
  }

  render() {
    const { close } = this.props;
    return (
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='modal-title'>WHAT WOULD YOU LIKE TO KNOW ABOUT THIS PRODUCT?</h4>
          </div>
          <form className='qaModalForm' onSubmit={(e) => this.handleSubmit(e)}>
            <div id='qaModalyourAnswer'>YOUR QUESTION :</div>
            <br />
            <textarea
              type='text'
              className='qaModalyourQuestion'
              name='body'
              onChange={this.onChange}
              maxLength='1000'
              placeholder='Your question here...'
              required
            />
            <br />
            <div className='nickName'>WHAT IS YOUR NICKNAME : </div>
            <br />
            <input
              type='text'
              name='name'
              onChange={this.onChange}
              className='qaModalNickNameQ'
              maxLength='60'
              placeholder='Example: jack543!'
              required
            />
            <br />
            <p className='qaModalPrivacyWarning'>
              For privacy reasons, do not use your full name or email address
            </p>
            <br />
            <div className='qaModalEmail'>YOUR EMAIL : </div>
            <br />
            <input
              type='text'
              name='email'
              onChange={this.onChange}
              className='qaModalEmailQ'
              maxLength='60'
              placeholder='Example: jack@email.com'
              required
            />
            <br />
            <p className='qaModalEmailWarning'>
              For authentication reasons, you will not be emailed
            </p>
            <br />
            <div className='modal-footer'>
              <button className='qaModalSubmit' type='submit'>
                Submit
              </button>
              <button className='qaModalSubmit' type='submit' onClick={close}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default QuestionModal;
