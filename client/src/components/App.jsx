import React from 'react';
import Overview from './Overview/Overview.jsx';
import Reviews from './Reviews/Reviews.jsx';
import QA from './QA/QA.jsx';

const productId = 17762;

const App = () => (
  <>
    <Overview productId={productId} />
    <QA productId={productId} />
    <Reviews productId={productId} />
  </>
);

export default App;
