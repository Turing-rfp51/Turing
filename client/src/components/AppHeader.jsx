import React from 'react';

import TuringLogo from './Shared/TurningLogo/TuringLogo.svg';

const AppHeader = () => (
  <div className='appHeaderContainer'>
    <img src={TuringLogo} alt='logo' className='turingLogo' />
  </div>
);

export default AppHeader;
