import React from 'react';
import Overview from './Overview/Overview.jsx';
import Reviews from './Reviews/Reviews.jsx';
import QA from './QA/QA.jsx';
import AppHeader from './AppHeader.jsx';
import InteractionTracker from './Shared/InteractionTracker.jsx';

const { TOKEN } = require('../../../config.js');

const productId = 17072;

const ReviewsWithTracker = InteractionTracker(Reviews);
const QAWithTracker = InteractionTracker(QA);
const OverviewWithTracker = InteractionTracker(Overview);

const App = () => (
  <div className='appContainer'>
    <AppHeader />
    <OverviewWithTracker productId={productId} InteractionTracker={InteractionTracker} />
    <QAWithTracker productId={productId} TOKEN={TOKEN} InteractionTracker={InteractionTracker} />
    <ReviewsWithTracker productId={productId} TOKEN={TOKEN} />
  </div>
);

export default App;
