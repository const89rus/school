import styled from 'styled-components';

export const EventWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 3rem 0;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.darkPrimary};
`;

export const Date = styled.div`
  display: flex;
  padding: 1.5rem 1rem;
  margin: 0 0.5rem;
  background-color: ${(props) => props.theme.colors.yellow};
  @media (max-width: 1170px) {
    font-size: 1.5rem;
  }
`;

export const Time = styled.div`
  display: flex;
  padding: 1.5rem;
  margin: 0 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  @media (max-width: 1170px) {
    font-size: 1.5rem;
  }
`;

export const Event = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
`;

export const Heading = styled.h4`
  display: flex;
  font-weight: 400;
  font-size: 2rem;
  margin: 0;
`;

export const Description = styled.h6`
  display: flex;
  font-weight: 400;
  font-size: 1.5rem;
  margin: 0;
  @media (max-width: 1170px) {
    font-size: 1.2rem;
  }
`;
