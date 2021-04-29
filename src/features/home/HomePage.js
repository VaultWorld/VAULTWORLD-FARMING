import React from 'react';

import Pools from 'features/vault/components/Pools/Pools';
import Disclaimer from 'components/Disclaimer/Disclaimer';

import './HomePage.scss';

export default function HomePage() {
  return (
    <div style={{paddingTop:"150px"}}>
      <Disclaimer />
      <Pools fromPage="home" />
    </div>
  );
}
