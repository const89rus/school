import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10.625rem, 1fr));
  grid-template-rows: repeat(2, minmax(8.1875rem, 1fr));
  grid-column-gap: 2.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50.375rem;
  height: 30.9375rem;
  font-size: 0.8125rem;
`;

export const VideoWrapper = styled.div`
  height: 4.625rem;
  width: 12.1875rem;
`;

export const HomeworkWrapper = styled.div`
  height: 18.25rem;
  width: 58rem;
  padding: 1rem;
  margin-top: 8rem;
`;

export const HomerworkItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6.625rem, 1fr));
  grid-template-rows: repeat(2, minmax(8.1875rem, 1fr));
  grid-gap: 1.875rem;
`;
