import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.21);
`;

export const Iframe = styled.div`
  height: 16.5rem;
  width: 100%;
  display: flex;
  border: 5px solid ${(props) => props.theme.colors.yellow};
  box-sizing: border-box;
`;

export const HeadlineVideo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0.5rem;
  height: 3rem;
  background-color: ${(props) => props.theme.colors.white};
  @media (max-width: 950px) {
    font-size: 0.8rem;
  }
`;
