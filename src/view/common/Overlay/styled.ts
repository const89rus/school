import styled from 'styled-components';

export const OverlayWrapper = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  left: 0;
  top: 15.313rem;
  background-color: rgba(246, 174, 45, 0.65);
  display: none;
  z-index: 1;
  @media (max-width: 900px) {
    display: block;
  }
`;
