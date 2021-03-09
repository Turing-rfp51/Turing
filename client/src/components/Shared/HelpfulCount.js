import axios from 'axios';

const { TOKEN } = require('../../../../config.js');

const updateHelpfulCount = (path, itemId, cb) => {
  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/${path}/${itemId}/helpful`,
      {},
      {
        headers: { Authorization: TOKEN },
      }
    )
    .then(cb)
    .catch((err) => console.error(err));
};

const reportItem = (path, itemId, cb) => {
  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/${path}/${itemId}/report`,
      {},
      {
        headers: { Authorization: TOKEN },
      }
    )
    .then(cb)
    .catch((err) => console.error(err));
};

export { updateHelpfulCount, reportItem };
