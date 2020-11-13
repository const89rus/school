import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

import { Button as ButtonUi } from 'view/common';

import { ReactComponent as LogoSvg } from 'assets/svg/logo.svg';

interface IStyled {
  bgColor?: string;
}

export const Layout = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 10.313rem;
  display: flex;
  padding: ${(props) => props.theme.root.contentPadding};
  justify-content: space-between;
`;

export const Button = styled(ButtonUi)`
  color: #ffffff;
  height: 4.063rem;
  width: 23.125rem;
  font-size: 2rem;
  border: none;
`;

export const SocialContainer = styled.div`
  margin-left: 1.875rem;
  background-color: ${(props) => props.theme.colors.darkPrimary};
  height: 4.063rem;
  width: 4.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 2.625rem;
`;

export const LogoWrapper = styled.div`
  margin-top: 1.625rem;
`;

export const Logo = styled(LogoSvg)`
  width: 16.688rem;
  height: 6.688rem;
`;

export const MenuContainer = styled.div<IStyled>`
  height: 5rem;
  padding: ${(props) => props.theme.root.contentPadding};
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: space-between;
`;

export const MenuItem = styled(HashLink)`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
  text-decoration: none;
`;

export const MenuItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.colors.yellow};
  }
`;
