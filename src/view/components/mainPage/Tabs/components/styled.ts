import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${(props) => props.theme.root.contentPadding};
  padding-top: 5.625rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
