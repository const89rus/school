import styled from 'styled-components';

import { device } from 'assets/variables/mediaSizes';

export const LessonWrapper = styled.div`
  padding: 0 1rem;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.625rem, 1fr));
  grid-template-rows: repeat(2, minmax(14.1875rem, 1fr));
  grid-column-gap: 2.5rem;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.8125rem;
  align-content: center;
  @media (max-width: 1600px) {
    margin-top: 4rem;
    align-items: stretch;
    grid-template-rows: repeat(2, minmax(18.1875rem, 1fr));
  }
  @media ${device.mobileS} and (max-width: 1023px) {
    width: auto;
    height: auto;
    overflow-x: scroll;
    grid-row-gap: 2.5rem;
    padding: 0;
  }
`;

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15.5625rem;
  align-self: start;
`;

export const HomeworkWrapper = styled.div`
  height: 18.25rem;
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
  grid-template-rows: 1fr 1fr;
  grid-gap: 1.875rem;
  grid-auto-flow: column;
`;

export const YouTubeTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  margin: 0;
  padding: 0.5rem;
  height: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.21);
`;
