import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AuthContextProvider } from 'data/auth/AuthContextProvider';

import { Routes } from 'view/Routes';

import { theme } from 'assets/theme';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
