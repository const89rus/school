import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Header, Team } from 'view/components/mainPage';

export const MainPage: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <Header />
      <Team />
    </div>
  );
};
