/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';

const { TOKEN } = require('../../../../config.js');

const InteractionTracker = (WrappedComponent) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.postInteraction = this.postInteraction.bind(this);
    }

    postInteraction(event, widget) {
      console.log(event.target.outerHTML, widget);
      axios({
        method: 'post',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/interactions',
        headers: {
          'Authorization': TOKEN,
          'Content-Type': 'application/json',
        },
        data: {
          'element': event.target.outerHTML,
          'widget': widget,
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
      return <WrappedComponent {...this.props} postInteraction={this.postInteraction} />;
    }
  };

export default InteractionTracker;
