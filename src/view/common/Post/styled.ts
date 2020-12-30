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
  overflow: hidden;
  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const Fragment = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.yellow};
  height: 15.5rem;
  padding: 0.5rem;
  position: relative;
`;

export const Link = styled.a`
  position: absolute;
  width: 54%;
  bottom: 0.5rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.yellowHalf};
  color: ${(props) => props.theme.colors.white};
  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
`;
