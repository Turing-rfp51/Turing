import React from 'react';
import axios from 'axios';

import QuestionSearch from './QuestionSearch.jsx';
import QAList from './QAList.jsx';

const { TOKEN } = require('../../../../config.js');

class QA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getQA();
  }

  getQA() {
    console.log('inside get QA');
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${this.props.productId}`,
        { headers: { Authorization: TOKEN } }
      )
      .then((obj) => {
        this.setState({ data: obj.data.results });
        console.log(obj.data.results);
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className='qaModuleContainer'>
        <h3>{'QUESTIONS & ANSWERS'}</h3>
        <QuestionSearch />
        <QAList data={this.state.data} getQA={this.getQA.bind(this)} />
      </div>
    );
  }
}

export default QA;
