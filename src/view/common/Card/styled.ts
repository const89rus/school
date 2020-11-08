import styled from 'styled-components';

interface Style {
  variant?: 'primaryDark' | 'yellow';
}

// Пример просто
export const CardWrapper = styled.div<Style>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 2rem 1rem;
`;

export const CardAvatar = styled.div<Style>`
  width: 10rem;
  clip-path: circle();
  border: 10px solid;
  border-radius: 50%;
  border-color: ${({ variant, theme }) => (variant === 'primaryDark' ? theme.colors.darkPrimary : theme.colors.yellow)};
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img<Style>`
  width: 100%;
  border-radius: 50%;
`;

export const CardContent = styled.div<Style>`
  margin-top: -6rem;
  padding: 0 1rem;
  border-top: 20px solid;
  border-color: ${({ variant, theme }) => (variant === 'primaryDark' ? theme.colors.darkPrimary : theme.colors.yellow)};
  width: 25rem;
  min-height: 16rem;
  max-height: 20rem;
  height: 100%;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Name = styled.span<Style>`
  font-size: 1.5rem;
  margin: 3rem 0 0.2rem;
  color: ${(props) => props.theme.colors.primary};
`;