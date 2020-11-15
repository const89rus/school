import React from 'react';
import styled from 'styled-components';

const AlertWrapper = styled.div`
  background-color: #f36c6c;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 0.625rem;
`;

export const Alert: React.FC = ({ children }) => {
  return <AlertWrapper>{children}</AlertWrapper>;
};
