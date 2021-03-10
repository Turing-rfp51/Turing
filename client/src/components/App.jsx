import React from 'react';
import Overview from './Overview/Overview.jsx';
import Reviews from './Reviews/Reviews.jsx';
import QA from './QA/QA.jsx';

const { TOKEN } = require('../../../config.js');

const productId = 17072;

const App = () => (
  <>
    <Overview productId={productId} />
    <br />
    <br />
    <br />
    <br />
    <QA productId={productId} />
    <br />
    <br />
    <br />
    <br />
    <Reviews productId={productId} TOKEN={TOKEN} />
  </>
);

export default App;
