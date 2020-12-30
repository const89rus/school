import styled from 'styled-components';

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
