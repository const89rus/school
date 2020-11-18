import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${(props) => props.theme.root.contentPadding};
  padding-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.yellow};
  height: 100vh;
  @media (min-width: 1600px) and (max-width: 1800px) {
    padding: 2.5rem 18.5rem 0;
  }
  @media (max-width: 1280px) {
    padding: 2.5rem 13rem 0;
  }
`;
