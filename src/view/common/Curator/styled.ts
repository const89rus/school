import styled from 'styled-components';

import { device } from 'assets/variables/mediaSizes';

export const CuratorWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.8rem;
  width: 15.875rem;
  height: 33.875rem;
  margin-right: 2rem;
  @media ${device.mobileS} and (max-width: 1023px) {
    width: auto;
    height: auto;
    padding: 2.5rem;
    margin-right: 0;
  }
`;

export const CuratorAvatar = styled.div`
  width: 100%;
  @media ${device.mobileS} and (max-width: 1023px) {
    display: flex;
    aligh-items: center;
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 100%;
  @media ${device.mobileL} and (max-width: 1023px) {
    width: 70%;
  }
`;

export const SocialContainer = styled.div`
  height: 1rem;
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} and (max-width: 1023px) {
    width: 2rem;
    margin-top: 1rem;
  }
  @media ${device.mobileL} and (max-width: 768px) {
    width: 2.5rem;
    margin-top: 1rem;
  }
  @media ${device.mobileS} and (max-width: 425px) {
    width: 3rem;
    margin-top: 1rem;
  }
`;

export const CuratorContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media ${device.tablet} and (max-width: 1023px) {
    padding: 2rem 10rem;
  }
  @media ${device.mobileL} and (max-width: 768px) {
    padding: 2rem 5rem;
  }
  @media ${device.mobileS} and (max-width: 425px) {
    padding: 2rem 0;
  }
`;

export const Name = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.yellow};
  @media ${device.tablet} and (max-width: 1023px) {
    font-size: 1.5rem;
  }
  @media ${device.mobileL} and (max-width: 768px) {
    font-size: 2rem;
  }
  @media ${device.mobileS} and (max-width: 425px) {
    font-size: 2.5rem;
  }
`;

export const Info = styled.div`
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1rem;
  height: 7rem;
  margin-top: 0.5rem;
  @media ${device.tablet} and (max-width: 1023px) {
    padding: 2rem 0;
    font-size: 1.4rem;
  }
  @media ${device.mobileL} and (max-width: 768px) {
    padding: 1.7rem 0;
    font-size: 2rem;
  }
  @media ${device.mobileS} and (max-width: 425px) {
    padding: 2rem 0;
    font-size: 2rem;
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width: 3.5rem;
  margin-top: 0.2rem;
  @media ${device.tablet} and (max-width: 1023px) {
    width: 4.5rem;
  }
  @media ${device.mobileL} and (max-width: 768px) {
    width: 5rem;
  }
  @media ${device.mobileS} and (max-width: 425px) {
    width: 6rem;
  }
`;

export const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.yellow};
  font-size: 0.8rem;
  text-decoration: none;
  @media ${device.tablet} and (max-width: 1023px) {
    padding: 0 10rem 2rem 10rem;
    font-size: 1.2rem;
  }
  @media ${device.mobileL} and (max-width: 768px) {
    padding: 0 5rem;
    font-size: 1.5rem;
  }
  @media ${device.mobileS} and (max-width: 425px) {
    padding: 0;
    font-size: 1.8rem;
  }
`;

export const Edit = styled.a`
  width: auto;
`;

export const LogOut = styled.a`
  width: auto;
`;
