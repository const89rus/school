import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Routes } from 'view/Routes';
import { Layout } from 'view/components/layout/Layout';

import { theme } from 'assets/theme';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};
