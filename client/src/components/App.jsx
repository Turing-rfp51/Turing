import React from 'react';
import Overview from './Overview/Overview.jsx';
import Reviews from './Reviews/Reviews.jsx';
import QA from './QA/QA.jsx';
import AppHeader from './AppHeader.jsx';

const { TOKEN } = require('../../../config.js');

const productId = 17762;

const App = () => (
  <>
    <AppHeader />
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
