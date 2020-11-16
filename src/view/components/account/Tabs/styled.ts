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
  background-color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.yellow)};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const Text = styled(TabHeaderUi)<Style>`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.375rem;
  bottom: 0.75rem;
  position: absolute;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const ContentWrapper = styled.div` 
  width: 50.375rem;
  height: 36.9375rem;
  overflow-y: hidden;
  overflow-x: scroll;
  background-color: ${(props) => props.theme.colors.primary};
`;


export const Input = styled.input`
  height: 6.144rem;
  border: none;
  font-family: Comfortaa;
  font-size: 1.75rem;
  line-height: 1.938rem;
  padding-left: 30px;
`;
