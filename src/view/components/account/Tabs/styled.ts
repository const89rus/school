import styled from 'styled-components';

import { TabHeader as TabHeaderUi } from 'view/common';

interface Style {
  active?: boolean;
}

export const AbsolutePosition = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${(props) => props.theme.colors.yellow};
`;

export const TabHeadersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3rem;
  width: 70%;
`;

export const TabHeader = styled(TabHeaderUi)<Style>`
  width: 15rem;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.primaryHalf)};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const Text = styled(TabHeaderUi)<Style>`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.375rem;
  bottom: 0.75rem;
  position: absolute;
  @media (max-width: 1330px) {
    font-size: 1.1rem;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const ContentWrapper = styled.div`
  width: 50.375rem;
  height: 39.9375rem;
  overflow-y: hidden;
  overflow-x: scroll;
  background-color: ${(props) => props.theme.colors.primary};
  @media (max-width: 1850px) {
    width: 45.375rem;
  }
  @media (max-width: 1330px) {
    width: 40.3rem;
    height: 31.95rem;
  }
`;

export const Input = styled.div`
  margin: 5rem 0 0 1rem;
  position: absolute;
`;
