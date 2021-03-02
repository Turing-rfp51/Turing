import React from 'react';
import axios from 'axios';

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
        <QAList data={this.state.data} />
      </div>
    );
  }
}

export default QA;
