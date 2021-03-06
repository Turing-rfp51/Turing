import React from 'react';

import Question from './Question.jsx';
import HelpfulQuestionUpvote from './HelpfulQuestionUpvote.jsx';
import AddAnswer from './AddAnswer.jsx';
import Modal from './Modal.jsx';

class QAHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ modal: true });
  }

  close() {
    this.setState({ modal: false });
  }

  render() {
    const { questionData, getQA } = this.props;
    return (
      <div className='qaHeader'>
        <Question questionData={questionData} />
        <div className='qaHelpfulUpVoteAndAddAnswer'>
          <HelpfulQuestionUpvote questionData={questionData} getQA={getQA} />
          <AddAnswer open={this.open} />
          {this.state.modal && <Modal getQA={getQA} close={this.close} />}
        </div>
      </div>
    );
  }
}

export default QAHeader;
