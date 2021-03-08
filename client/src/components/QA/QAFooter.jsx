import React from 'react';

import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import AddQuestion from './AddQuestion.jsx';
import QuestionModal from './QuestionModal.jsx';

class QAFooter extends React.Component {
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
    const { modal } = this.state;
    const { numOfQuestions, showMoreQuestions, questionsDisplayed, getQA, productId } = this.props;

    return (
      <div className='qaFooter'>
        <MoreAnsweredQuestions
          numOfQuestions={numOfQuestions}
          showMoreQuestions={showMoreQuestions}
          questionsDisplayed={questionsDisplayed}
        />
        <AddQuestion open={this.open} />
        {modal && <QuestionModal productId={productId} getQA={getQA} close={this.close} />}
      </div>
    );
  }
}

export default QAFooter;
