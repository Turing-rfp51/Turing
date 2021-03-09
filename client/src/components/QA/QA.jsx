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
    };
    this.getQA = this.getQA.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
  }

  componentDidMount() {
    this.getQA(this.createObjAnswers);
  }

  setFilter(text) {
    this.setState({ filter: text });
  }

  showMoreQuestions() {
    this.setState((current) => ({ questionsDisplayed: current.questionsDisplayed + 2 }));
  }

  // showMoreAnswers(questionId) {
  //   //edge case: if that doesn't exist -
  //   let currNum = this.state.answersPerQ[questionId] || 0;
  //   let currAPerQ = Object.assign(this.state.answersPerQ);
  //   currAPerQ[questionId] = currNum + 2;
  //   this.setState({ answersPerQ: currAPerQ });
  // }

  getQA(cb) {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?count=500&product_id=${this.props.productId}`,
        { headers: { Authorization: TOKEN } }
      )
      .then((obj) => {
        this.setState({ data: obj.data.results });
      })
      .then((results) => {
        if (cb) {
          cb(results);
        }
      })
      .catch((err) => console.error(err));
  }

  render() {
    const filteredData = [...this.state.data].filter((question) =>
      question.question_body.includes(this.state.filter)
    );
    // const questionsList = [...this.state.data].map((question) => question.question_body);
    const { data, questionsDisplayed } = this.state;
    const { productId } = this.props;
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
          showMoreAnswers={this.showMoreAnswers}
        />
        <QAFooter
          showMoreQuestions={this.showMoreQuestions}
          numOfQuestions={filteredData.length}
          questionsDisplayed={questionsDisplayed}
          getQA={this.getQA}
          productId={productId}
        />
      </div>
    );
  }
}

export default QA;
