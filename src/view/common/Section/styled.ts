import styled from 'styled-components';
//import colors from 'assets/variables/colors';

interface Style {
  variant?: string;
  headerVariant?: string;
  contentVariant?: string;
}

export const SectionWrapper = styled.div<Style>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ variant }) => variant};
`;

export const SectionHeader = styled.div<Style>`
  width: 20rem;
  font-weight: 400;
  font-size: 2rem;
  padding: 1rem 5rem;
  border-radius: 1rem 1rem 0px 0px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  background-color: ${({ headerVariant }) => headerVariant};
`;

export const SectionContent = styled.div<Style>`
  width: 100%;
  padding: 3rem 0;
  font-weight: 400;
  background-color: ${({ contentVariant }) => contentVariant};
`;
