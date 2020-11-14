import styled from 'styled-components';

import { colors } from 'assets/variables/colors';

interface Style {
  appearance: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button = styled.button<Style>`
  background-color: ${({ appearance }) => (appearance === 'primary' ? colors.yellow : colors.darkPrimary)};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #d89f38;
  }
  &:disabled {
    background-color: #a29b9b;
    cursor: auto;
  }
`;
