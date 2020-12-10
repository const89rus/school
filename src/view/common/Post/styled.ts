import styled from 'styled-components';

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 59%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.21);
`;

export const Topic = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  height: 3rem;
  padding-left: 0.5rem;
`;

export const Fragment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.yellow};
  height: 16.5rem;
`;
