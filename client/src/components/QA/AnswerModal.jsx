import React from 'react';
import axios from 'axios';

const { TOKEN } = require('../../../../config.js');

class AnswerModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      name: '',
      email: '',
      photos: [],
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    console.log('this is the questionid', this.props.questionId);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventtDefault();
    const { body, name, email, photos } = this.state;
    const { questionId, close, getQA } = this.props;
    axios({
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionId}/answers`,
      headers: {
        'product_id': '17762',
        'Authorization': TOKEN,
        'Content-Type': 'application/json',
      },
      data: {
        'body': body,
        'name': nickname,
        'email': email,
        'photos': photos,
      },
    })
      .then((response) => {
        console.log('success posting new answer', response);
      })
      .catch((err) => {
        console.log('error posting answer', err);
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
    const { questionBody, questionId, updateAnswers, close } = this.props;
    return (
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='modal-title'>PLEASE SHARE YOUR EXPERIENCE </h4>
          </div>
          <form className='qaModalForm' onSubmit={(e) => this.handleSubmit(e)}>
            <div id='qaModalyourAnswer'>YOUR ANSWER :</div>
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

export default AnswerModal;
