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
  justify-content: space-between;
  padding: ${(props) => props.theme.root.contentPadding};
`;

export const TabHeader = styled(TabHeaderUi)<Style>`
  height: 10.625rem;
  width: 10.625rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.yellow)};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
  bottom: 0.75rem;
  position: absolute;
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 20rem;
  position: relative;
`;
