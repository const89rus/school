import styled from 'styled-components';

import { device } from 'assets/variables/mediaSizes';

export const Wrapper = styled.div`
  padding: ${(props) => props.theme.root.contentPadding};
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.yellow};
  min-height: 100vh;
  @media (min-width: 1600px) and (max-width: 1800px) {
    padding: 2.5rem 20.5rem 0;
  }
  @media (min-width: 1450px) and (max-width: 1600px) {
    padding: 2.5rem 25.5rem 0;
  }
  @media (max-width: 1280px) {
    padding: 2.5rem 13rem 0;
  }
  @media ${device.mobileS} and (max-width: 1023px) {
    padding: 0;
    flex-direction: column;
    justify-content: center;
    height: auto;
  }
`;

export const MobileMenuWrapper = styled.div`
  display: none;
  @media ${device.mobileS} and (max-width: 1023px) {
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
  @media ${device.mobileS} and (max-width: 500px) {
    padding: 1rem 5rem;
  }
`;

export const TabsWrapper = styled.div`
  @media ${device.mobileS} and (max-width: 1023px) {
    display: none;
  }
`;

export const MobileHomework = styled.div`
  display: none;
  padding: 1rem 2.25rem;
  background-color: ${(props) => props.theme.colors.darkPrimary};
  @media ${device.mobileS} and (max-width: 1023px) {
    display: grid;
    padding: 2rem 2.25rem;
  }
`;

export const MobileLesson = styled.div`
  display: none;
  padding: 1rem 2.25rem;
  background-color: ${(props) => props.theme.colors.yellow};
  @media ${device.mobileS} and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MobileTabsHeader = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.white};
  text-align: left;
  @media ${device.mobileS} and (max-width: 1023px) {
    padding: 2rem 0;
  }
`;
