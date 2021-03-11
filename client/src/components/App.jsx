import React from 'react';
import Overview from './Overview/Overview.jsx';
import Reviews from './Reviews/Reviews.jsx';
import QA from './QA/QA.jsx';
import AppHeader from './AppHeader.jsx';

const { TOKEN } = require('../../../config.js');

const productId = 17070;

const App = () => (
  <div className='appContainer'>
    <AppHeader />
    <Overview productId={productId} />
    <QA productId={productId} />
    <Reviews productId={productId} TOKEN={TOKEN} />
  </div>
);

export default App;
