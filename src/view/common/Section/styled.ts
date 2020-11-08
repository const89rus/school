import styled from 'styled-components';
//import colors from 'assets/variables/colors';

interface Style {
  variant?: 'primaryDark' | 'yellow';
  headerVariant?: 'primaryDark' | 'yellow';
  contentVariant?: 'primaryDark' | 'yellow';
}

export const SectionWrapper = styled.div<Style>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ variant, theme }) =>
    variant === 'primaryDark' ? theme.colors.darkPrimary : theme.colors.yellow};
`;

export const SectionHeader = styled.div<Style>`
  width: 10rem;
  font-weight: 400;
  font-size: 1.5rem;
  padding: 1rem 5rem;
  border-radius: 1rem 1rem 0px 0px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  background-color: ${({ headerVariant, theme }) =>
    headerVariant === 'primaryDark' ? theme.colors.darkPrimary : theme.colors.yellow};
`;

export const SectionContent = styled.div<Style>`
  width: 100%;
  padding: 3rem 0;
  font-weight: 400;
  background-color: ${({ contentVariant, theme }) =>
    contentVariant === 'primaryDark' ? theme.colors.darkPrimary : theme.colors.yellow};
`;
