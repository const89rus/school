import styled from 'styled-components';

import { device } from 'assets/variables/mediaSizes';

export const LessonWrapper = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10.625rem, 1fr));
  grid-template-rows: repeat(2, minmax(8.1875rem, 1fr));
  grid-column-gap: 2.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50.375rem;
  height: 30.9375rem;
  font-size: 0.8125rem;
  @media ${device.mobileS} and (max-width: 1023px) {
    width: auto;
    height: auto;
    overflow-x: scroll;
    grid-row-gap: 2.5rem;
    padding: 0;
  }
`;

export const VideoWrapper = styled.div`
  height: 4.625rem;
  width: 12.1875rem;
  @media ${device.mobileS} and (max-width: 1023px) {
    width: auto;
    height: auto;
    align-self: start;
  }
`;

export const HomeworkWrapper = styled.div`
  height: 18.25rem;
  width: 58rem;
  padding: 1rem;
  margin-top: 8rem;
  @media ${device.mobileS} and (max-width: 1023px) {
    margin: 0;
    width: auto;
    overflow-x: scroll;
  }
`;

export const HomerworkItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6.625rem, 1fr));
  grid-template-rows: repeat(2, minmax(8.1875rem, 1fr));
  grid-gap: 1.875rem;
`;
