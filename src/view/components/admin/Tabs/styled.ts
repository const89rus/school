import styled from 'styled-components';

import { TabHeader as TabHeaderUi } from 'view/common';

interface Style {
  active?: boolean;
}

export const AbsolutePosition = styled.div`
  position: absolute;
  top: -5.313rem;
  width: 100%;
`;

export const TabHeadersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
`;

export const TabHeader = styled(TabHeaderUi)<Style>`
  height: 3rem;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.active ? props.theme.colors.darkPrimary : props.theme.colors.primary)};
  &:hover {
    background-color: ${(props) => props.theme.colors.yellow};
  }
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
  @media (max-width: 1599px) {
    bottom: 0rem;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 55;
  display: flex;
  margin-top: 5rem;
`;
