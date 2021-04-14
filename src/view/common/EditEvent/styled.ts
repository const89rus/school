import styled from 'styled-components';

export const EventWrapper = styled.form`
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

export const IconButton = styled.div`
  width: 100%;
  max-width: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
