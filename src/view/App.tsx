import React from 'react';

import { Routes } from 'view/Routes';
import { Layout } from 'view/components/layout/Layout';

export const App: React.FC = () => {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};
