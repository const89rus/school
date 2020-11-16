import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6.625rem, 1fr));
  grid-template-rows: repeat(2, minmax(8.1875rem, 1fr));
  grid-gap: 3rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50.375rem;
  height: 36.9375rem;
  font-size: 0.8125rem;
`;

export const VideoWrapper = styled.div`
  width: 6.625rem;
  height: 8.1875rem;
`;
