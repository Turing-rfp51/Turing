import React from 'react';
import Overview from './Overview/Overview.jsx';
import Reviews from './Reviews/Reviews.jsx';
import QA from './QA/QA.jsx';

const productId = 17792;

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
    <Reviews productId={productId} />
  </>
);

export default App;
