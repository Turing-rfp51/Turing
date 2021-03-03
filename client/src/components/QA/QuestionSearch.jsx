import React from 'react';

const QuestionSearch = (props) => (
  <React.Fragment>
    <form>
      <div className='search-box'>
        <label>QUESTIONS & ANSWERS</label>
        <input type='text' placeholder={'HAVE A QUESTION? SEARCH FOR'} />
      </div>
    </form>
  </React.Fragment>
);

export default QuestionSearch;
