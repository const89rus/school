import styled from 'styled-components';

export const Verify = styled.a`
  width: auto;
  margin-top: 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.yellow};
  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Verifyed = styled.p`
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.white};
`;
