import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.21);
`;

export const Iframe = styled.div`
  height: auto;
  display: flex;
`;

export const HeadlineVideo = styled.div`
  height: 3rem;
  background-color: ${(props) => props.theme.colors.white};
`;
