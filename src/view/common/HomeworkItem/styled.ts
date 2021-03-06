import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 6.625rem;
  height: 8.1875rem;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1023px) {
    background-color: transparent;
  }
`;
