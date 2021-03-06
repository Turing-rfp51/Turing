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
    this.showMoreAnswers = this.showMoreAnswers.bind(this);
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

  showMoreAnswers(questionID) {
    this.setState((current) => ({ answersDisplayed: current.answersDisplayed + 2 }));
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
    const { data, questionsDisplayed, answersDisplayed } = this.state;
    return (
      <div className='qaModuleContainer'>
        <h3>{'QUESTIONS & ANSWERS'}</h3>
        <QuestionSearch data={data} setFilter={this.setFilter} />
        <QAList
          data={
            filteredData.length > 0
              ? filteredData.slice(0, questionsDisplayed)
              : data.slice(0, questionsDisplayed)
          }
          getQA={this.getQA}
          answersDisplayed={answersDisplayed}
          showMoreAnswers={this.showMoreAnswers}
        />
        <QAFooter
          showMoreQuestions={this.showMoreQuestions}
          numOfQuestions={filteredData.length}
          questionsDisplayed={questionsDisplayed}
        />
      </div>
    );
  }
}

export default QA;

// const sortedData = [...this.state.data]
// .filter((question) => question.answers)
// .sort((a, b) => b.helpfulness - a.helpfulness);
