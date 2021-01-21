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

export const EventWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 55% 2.5% 2.5%;
  align-items: start;
  justify-content: center;
  font-size: 2rem;
  margin: 1rem 0;
  color: ${(props) => props.theme.colors.white};
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const Date = styled.input`
  display: flex;
  padding: 1rem;
  margin: 0 0.5rem;
  background-color: ${(props) => props.theme.colors.white};
  align-items: center;
  border: none;
  @media (max-width: 1815px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1023px) {
    height: auto;
    font-size: 1.5rem;
    width: 21rem;
    justify-content: center;
  }
`;

export const Time = styled.input`
  display: flex;
  padding: 1rem;
  margin: 0 1.5rem;
  background-color: ${(props) => props.theme.colors.white};
  align-items: center;
  border: none;
  @media (max-width: 1900px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1815px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1170px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1023px) {
    height: auto;
    width: 20rem;
    justify-content: center;
  }
`;

export const Event = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
  height: 1rem;
  @media (max-width: 1023px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Heading = styled.input`
  display: flex;
  font-weight: 400;
  margin: 0;
  border: none;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  padding: 0.5rem;
  @media (max-width: 1023px) {
    margin-top: 0.5rem;
    width: 20rem;
  }
  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;

export const Description = styled.input`
  display: flex;
  font-weight: 400;
  margin: 0;
  border: none;
  padding-left: 0.5rem;
  @media (max-width: 1170px) {
    font-size: 1.2rem;
    width: 20rem;
  }
  @media (max-width: 1023px) {
    text-align: center;
    margin-top: 0.5rem;
  }
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

export const MMWrapper = styled.div`
  display: grid;
  grid-template-columns: 18% 18% 18% 18% 18% 3.5% 3.5%;
  align-items: start;
  justify-content: center;
  font-size: 2rem;
  margin: 1rem 0;
  color: ${(props) => props.theme.colors.white};
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const Input = styled.input`
  display: flex;
  padding: 1rem;
  margin: 0 0.5rem;
  background-color: ${(props) => props.theme.colors.white};
  align-items: center;
  border: none;
  @media (max-width: 1815px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1023px) {
    height: auto;
    font-size: 1.5rem;
    width: 21rem;
    justify-content: center;
  }
`;

export const EditCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  align-items: start;
  justify-content: center;
  font-size: 2rem;
  margin: 1rem 0;
  color: ${(props) => props.theme.colors.white};
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;
