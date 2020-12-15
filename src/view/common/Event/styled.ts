import styled from 'styled-components';

export const EventWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 3rem 0;
  color: ${(props) => props.theme.colors.white};
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const Date = styled.div`
  display: flex;
  padding: 1.5rem 1rem;
  margin: 0 0.5rem;
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.colors.yellow};
  height: 3rem;
  align-items: center;
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

export const Time = styled.div`
  display: flex;
  padding: 1.5rem;
  margin: 0 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  height: 3rem;
  align-items: center;
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
  @media (max-width: 1023px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Heading = styled.h4`
  display: flex;
  font-weight: 400;
  font-size: 2rem;
  margin: 0;
  @media (max-width: 1023px) {
    margin-top: 0.5rem;
    width: 20rem;
  }
  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;

export const Description = styled.h6`
  display: flex;
  font-weight: 400;
  font-size: 1.5rem;
  margin: 0;
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
