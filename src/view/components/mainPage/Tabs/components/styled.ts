import styled from 'styled-components';

import { device } from 'assets/variables/mediaSizes';

export const Wrapper = styled.div`
  padding: ${(props) => props.theme.root.contentPadding};
  padding-top: 5.625rem;
  padding-bottom: 20rem;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media ${device.laptopL} {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 7rem;
  }
  @media (max-width: 1599px) {
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-gap: 6rem;
  }
  @media (max-width: 1280px) {
    padding: 0 13rem;
    padding-top: 5.625rem;
    padding-bottom: 20rem;
  }
  @media (max-width: 1115px) {
    grid-gap: 1rem;
  }
  @media (max-width: 600px) {
    padding: 0 5rem;
    padding-top: 10.625rem;
    padding-bottom: 20rem;
    grid-template-columns: 1fr;
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 0;
  }
`;
