import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

import { Button as ButtonUi } from 'view/common';

import { device } from 'assets/variables/mediaSizes';

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
  @media (max-width: 1280px) {
    padding: 0 13rem;
  }
  @media ${device.mobileS} and (max-width: 500px) {
    padding: 0 5rem;
  }
`;

export const Button = styled(ButtonUi)`
  color: #ffffff;
  height: 4.063rem;
  width: 23.125rem;
  font-size: 2rem;
  border: none;
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const SocialContainer = styled.div`
  margin-left: 1.875rem;
  background-color: ${(props) => props.theme.colors.darkPrimary};
  cursor: pointer;
  height: 4.063rem;
  width: 4.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #075f6bb2;
  }
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
  @media (max-width: 1280px) {
    padding: 0 13rem;
  }
  @media (max-width: 700px) {
    padding: 0 5rem;
  }
`;

export const MenuItem = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
  text-decoration: none;
  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
  @media (max-width: 800px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const MenuItemWrapper = styled(HashLink)`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 5rem;
  &:hover {
    background-color: ${(props) => props.theme.colors.yellow};
  }
`;
