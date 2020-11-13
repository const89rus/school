import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${(props) => props.theme.root.contentPadding};
  padding-top: 5.625rem;
  padding-bottom: 20rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
`;
