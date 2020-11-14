import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${(props) => props.theme.root.contentPadding};
  padding-top: 5.625rem;
  padding-bottom: 20rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  justify-content: center;
  align-items: center;
  text-align: center;
`;
