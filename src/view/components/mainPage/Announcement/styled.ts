import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${(props) => props.theme.root.contentPadding};
  height: auto;
  @media (max-width: 1780px) {
    padding: 0 13rem;
  }
  @media (max-width: 1023px) {
    padding: 0 13rem 8rem;
  }
`;
