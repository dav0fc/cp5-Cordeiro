import React from 'react';

import WineInfo from './WineInfo';
import TechnInfo from './TechInfo';
import SensoryInfo from './SenseInfo';
import Reviews from './Reviews';
import ExpertAval from './ExpertAval';

export default function WineMain ({ wine }) {
  return (
    <div className="container mx-auto p-6 bg-[#ccebff]">
      <div className="flex flex-col items-center">
        <WineInfo wine={wine} />
        <TechnInfo technical={wine.technical} />
        <SensoryInfo sensory={wine.sensory} />
        <ExpertAval expert={wine.expert}/>
        <Reviews reviews={wine.reviews} />
      </div>
    </div>
  );
};
