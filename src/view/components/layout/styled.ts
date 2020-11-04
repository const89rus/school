import styled from 'styled-components';

import { Button as ButtonUi } from 'view/common';

export const Layout = styled.div`
  background-color: #1794a5;
  height: 10.313rem;
  display: flex;
  padding-left: 23.5rem;
  padding-right: 23.438rem;
`;

export const Button = styled(ButtonUi)`
  color: #ffffff;
  height: 4.063rem;
  width: 23.125rem;
  font-size: 2rem;
  border: none;
  margin-left: 20.75rem;
  margin-top: 2.625rem;
`;

export const SocialContainer = styled.div`
  margin-left: 1.875rem;
  background-color: #075f6b;
  height: 4.063rem;
  width: 4.375rem;
  margin-top: 2.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  margin-top: 1.625rem;
`;
