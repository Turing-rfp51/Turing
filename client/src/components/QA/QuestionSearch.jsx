import React from 'react';

class QuestionSearch extends React.Component {
  constructor(props) {
    super(props);
    this.items = ['Jack', 'Jill', 'John', 'James', 'Irene'];

    this.state = {
      suggestions: [],
      text: '',
    };
    this.onTextChanged = this.onTextChanged.bind(this);
  }

  onTextChanged(e) {
    const { value } = e.target;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
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
      <div className='qaSearch-bar'>
        <input
          value={text}
          type='text'
          onChange={this.onTextChanged}
          placeholder='“Have a question? Search for answers…”
'
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default QuestionSearch;
