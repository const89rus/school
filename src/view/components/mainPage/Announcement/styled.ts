import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${(props) => props.theme.root.contentPadding};
  height: 27rem;
  @media (max-width: 1400px) {
    padding: 0 13rem;
  }
`;
