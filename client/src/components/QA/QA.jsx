/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';

import QuestionSearch from './QuestionSearch.jsx';
import QAList from './QAList.jsx';
import QAFooter from './QAFooter.jsx';

const { TOKEN } = require('../../../../config.js');

class QA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filter: '',
      questionsDisplayed: 2,
      answersDisplayed: 2,
    };
    this.getQA = this.getQA.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
  }

  componentDidMount() {
    this.getQA();
  }

  setFilter(text) {
    this.setState({ filter: text });
  }

  showMoreQuestions() {
    this.setState((current) => ({ questionsDisplayed: current.questionsDisplayed + 2 }));
  }

  getQA() {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${this.props.productId}`,
        { headers: { Authorization: TOKEN } }
      )
      .then((obj) => {
        this.setState({ data: obj.data.results });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const filteredData = [...this.state.data].filter((question) =>
      question.question_body.includes(this.state.filter)
    );
    return (
      <div className='qaModuleContainer'>
        <h3>{'QUESTIONS & ANSWERS'}</h3>
        <QuestionSearch data={this.state.data} setFilter={this.setFilter} />
        <QAList data={filteredData} getQA={this.getQA} showMoreQuestions={this.showMoreQuestions} />
        <QAFooter />
      </div>
    );
  }
}

export default QA;

// const sortedData = [...this.state.data]
// .filter((question) => question.answers)
// .sort((a, b) => b.helpfulness - a.helpfulness);
