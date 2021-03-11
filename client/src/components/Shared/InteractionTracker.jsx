import React from 'react';
import axios from 'axios';

const { TOKEN } = require('../../../../config.js');

class InteractionTracker extends React.Component {
  constructor(props) {
    super(props);
    this.postInteraction = this.postInteraction.bind(this);
  }

  postInteraction() {
    axios({
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/interactions',
      headers: {
        'Authorization': TOKEN,
        'Content-Type': 'application/json',
      },
      data: {
        'element': this.props.element,
        'widget': this.props.widget,
        'time': new Date(),
      },
    })
      .then((response) => {
        console.log('success posting new interaction', response);
      })
      .catch((err) => {
        console.log('error posting new interaction', err);
      });
  }

  render() {
    return this.props.render({
      postInteraction: this.postInteraction,
    });
  }
}

export default InteractionTracker;
