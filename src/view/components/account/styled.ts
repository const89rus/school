import styled from 'styled-components';

import { device } from 'assets/variables/mediaSizes';

export const Wrapper = styled.div`
  padding: ${(props) => props.theme.root.contentPadding};
  padding-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.yellow};
  height: 100vh;
  @media (min-width: 1600px) and (max-width: 1800px) {
    padding: 2.5rem 18.5rem 0;
  }
  @media (max-width: 1280px) {
    padding: 2.5rem 13rem 0;
  }
  @media ${device.mobileL} and (max-width: 1024px) {
    padding: 0;
    flex-direction: column;
    justify-content: center;
    height: auto;
  }
`;

export const MobileMenuWrapper = styled.div`
  display: none;
  @media ${device.mobileS} and (max-width: 1024px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.white};
  padding: 1rem 13rem;
`;

export const TabsWrapper = styled.div`
  @media ${device.mobileS} and (max-width: 1024px) {
    display: none;
  }
`;
