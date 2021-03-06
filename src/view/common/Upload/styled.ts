import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40.625rem;
  @media (max-width: 1850px) {
    width: 36.625rem;
  }
  @media (max-width: 1330px) {
    width: 32.5rem;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-right: 1rem;
  font-size: 1.375rem;
  background-color: ${(props) => props.theme.colors.yellow};
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  &:focus {
    background-color: ${(props) => props.theme.colors.primary};
    outline: 1px dotted ${(props) => props.theme.colors.black};
    pointer-events: none;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.darkPrimary};
  }
  @media (max-width: 1330px) {
    font-size: 1.1rem;
  }
`;

export const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const IconWrapper = styled.span`
  width: 2.0625rem;
  height: 2.0625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 1.5rem;
`;

export const FakeField = styled.span`
  width: calc(100% - 8.625rem);
  background-color: ${(props) => props.theme.colors.white};
  height: 2.875rem;
  display: flex;
  align-items: center;
  @media (max-width: 1330px) {
    width: calc(100% - 7.5rem);
  }
`;

export const SmileWrapper = styled.span`
  width: 2.0625rem;
  height: 2.0625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -3rem;
`;
