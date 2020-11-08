import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${(props) => props.theme.root.contentPadding};
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  margin: 0 2rem;
`;
