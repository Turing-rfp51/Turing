import React from 'react';

import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import AddQuestion from './AddQuestion.jsx';
import Modal from './Modal.jsx';

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
    return (
      <div className='qaFooter'>
        <MoreAnsweredQuestions />
        <AddQuestion open={this.open} />
        {this.state.modal && <Modal close={this.close} />}
      </div>
    );
  }
}

export default QAFooter;
