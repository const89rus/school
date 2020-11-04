import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Header, Tabs } from 'view/components/mainPage';

export const MainPage: React.FC<RouteComponentProps> = () => {
  return (
    <Fragment>
      <Header />
      <Tabs />
    </Fragment>
  );
};
