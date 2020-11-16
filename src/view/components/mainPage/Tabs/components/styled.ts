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
  @media ${device.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 0;
  }
`;
