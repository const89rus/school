import styled from 'styled-components';

interface Style {
  variant?: 'primaryDark' | 'yellow';
}

// Пример просто
export const CardWrapper = styled.div<Style>`
  width: 23.125rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${({ variant, theme }) => (variant === 'primaryDark' ? theme.colors.darkPrimary : theme.colors.yellow)};
`;
