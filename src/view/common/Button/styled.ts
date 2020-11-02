import styled from 'styled-components';

interface Style {
  appearance: 'primary' | 'secondary';
}

export const Button = styled.button<Style>`
  background: ${({ appearance }) => (appearance === 'primary' ? '#F6AE2D' : 'black')};
`;
