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
  @media (min-width: 1600px) and (max-width: 1800px) {
    width: 14.2875rem;
    height: 30.4875rem;
  }
  @media (max-width: 1330px) {
    width: 12.7rem;
    height: 27.1rem;
  }
  @media ${device.mobileS} and (max-width: 1024px) {
    width: auto;
    height: auto;
    padding: 2.5rem;
  }
`;

export const CuratorAvatar = styled.div`
  width: 100%;
  @media ${device.mobileS} and (max-width: 1024px) {
    display: flex;
    aligh-items: center;
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 100%;
  @media ${device.mobileL} and (max-width: 1024px) {
    width: 70%;
  }
`;

export const SocialContainer = styled.div`
  height: 1rem;
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CuratorContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media ${device.mobileS} and (max-width: 1024px) {
    padding: 2rem 5rem;
  }
`;

export const Name = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.yellow};
`;

export const Info = styled.div`
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1rem;
  height: 7rem;
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width: 3.5rem;
`;

export const Edit = styled.a`
  color: ${(props) => props.theme.colors.yellow};
  font-size: 0.8rem;
  text-decoration: none;
  @media ${device.tablet} and (max-width: 1024px) {
    padding: 0 0 2rem 5rem;
  }
  @media ${device.mobileS} and (max-width: 768px) {
    padding: 0 5rem;
  }
`;
