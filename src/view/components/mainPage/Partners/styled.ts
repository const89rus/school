import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${(props) => props.theme.root.contentPadding};
  display: flex;
  justify-content: center;
  height: 15rem;
  margin-top: 5rem;
  @media (max-width: 1280px) {
    padding: 0 13rem;
  }
`;

export const Img = styled.img`
  margin: 0 2rem;
  height: 3rem;
  width: 16rem;
`;
