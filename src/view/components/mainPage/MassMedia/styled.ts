import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${(props) => props.theme.root.contentPadding};
  margin: 5rem 0 10rem;
  @media (max-width: 1280px) {
    padding: 0 13rem;
  }
  @media (max-width: 700px) {
    padding: 0 5rem;
  }
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const VideoWrapper = styled.div`
  width: 39%;
  height: 15rem;
`;
