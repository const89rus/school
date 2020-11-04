import styled from 'styled-components';

interface Style {
  appearance: 'primary' | 'secondary';
}

export const Button = styled.button<Style>`
  background-color: ${({ appearance }) => (appearance === 'primary' ? '#F6AE2D' : 'black')};
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #d89f38;
  }
`;
