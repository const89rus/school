import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${(props) => props.theme.root.contentPadding};
  padding-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.yellow};
  height: 100vh;
`;
