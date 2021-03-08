import React from 'react';

class QuestionSearch extends React.Component {
  constructor(props) {
    super(props);
    // this.items = this.props.questionsList;

    this.state = {
      suggestions: [],
      text: '',
    };
    this.onTextChanged = this.onTextChanged.bind(this);
  }

  onTextChanged(e) {
    const { value } = e.target;
    // let suggestions = [];
    // if (value.length > 0) {
    //   const regex = new RegExp(`^${value}`, 'i');
    //   suggestions = this.props.questionsList.sort().filter((v) => regex.test(v));
    // }
    console.log(this.props.questionsList);
    this.setState(() => ({ text: value }));
    if (value.length >= 3) {
      this.props.setFilter(value);
    } else if (value.length < 3) {
      this.props.setFilter('');
    }
  }

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => (
          <li onClick={() => this.suggestionSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div className='qaWrap'>
        <div className='qaSearch-bar'>
          <input
            className='qaSearchTerm'
            value={text}
            type='text'
            onChange={this.onTextChanged}
            placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS…'
          />
        </div>
        <button type='submit' className='qaSearchButton'>
          <i className='fa fa-search'></i>
        </button>
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default QuestionSearch;
