/* eslint-disable func-names */
import React from 'react';
import axios from 'axios';

const { TOKEN } = require('../../../../config.js');

const productId = 17762;
const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${productId}`;
const config = {
  headers: { Authorization: TOKEN },
};

const initializeReivews = function () {
  axios
    .get(url, config)
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};

initializeReivews();

const Reviews = () => <div>Reviews</div>;

export default Reviews;
