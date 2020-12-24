import styled from 'styled-components';

//import { device } from 'assets/variables/mediaSizes';

export const Wrapper = styled.div`
  margin: 0 5rem;
  background-color: ${(props) => props.theme.colors.primary};
  height: auto;
  max-height: 50vh;
  width: 75vw;
  text-align: center;
  overflow-x: hidden;
  overflow-y: scroll;
  @media (max-width: 1280px) {
    margin: 0 3rem;
  }
  @media (max-width: 600px) {
    margin: 0 1rem;
  }
`;

export const AnnounceWrapper = styled.div`
  display: grid;
  grid-template-columns: 10fr;
`;

export const ReviewItem = styled.div`
  width: 5rem;
  display: flex;
  flex-direction: column;
  jusitfy-content: center;
  color: ${(props) => props.theme.colors.white};
`;

export const Lesson = styled.div`
  width: 5rem;
  margin: 1rem 0 0.3rem;
`;

export const Student = styled.div`
  width: 5rem;
`;

export const Review = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  grid-gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const Add = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 1rem 0;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.darkPrimary};
  &:hover {
    background-color: ${(props) => props.theme.colors.yellow};
  }
`;
