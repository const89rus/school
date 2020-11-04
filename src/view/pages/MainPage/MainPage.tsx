import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Header, Tabs, Announcement, Footer, MassMedia, Partners } from 'view/components/mainPage';

export const MainPage: React.FC<RouteComponentProps> = () => {
  return (
    <Fragment>
      <Header />

      <Tabs />

      <Announcement />

      <Partners />

      <MassMedia />

      <Footer />
    </Fragment>
  );
};
