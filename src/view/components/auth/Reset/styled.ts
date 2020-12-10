import styled from 'styled-components';

import { colors } from 'assets/variables/colors';
import { Button as ButtonUi } from 'view/common/Button/styled';

export const Wrapper = styled.div`
  min-height: 80vh;
  background-color: ${colors.primary};
  padding: 4.875rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormWrapper = styled.div`
  width: 45.625rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 425px) {
    width: 40rem;
  }
`;

export const Button = styled(ButtonUi)`
  padding: 0.625rem 11.4375rem;
  height: 3.2425rem;
  width: 100%;
  font-size: 1.875rem;
  line-height: 2.063rem;
  color: ${colors.white};
  font-family: Comfortaa;
  @media (max-width: 425px) {
    width: 100%;
    height: 5.2425rem;
  }
  &:last-child {
    border-bottom: 3px dashed ${colors.darkPrimary};
  }
`;

export const Input = styled.input`
  height: 4.144rem;
  border: none;
  font-family: Comfortaa;
  outline: none;
  font-size: 1.5rem;
  line-height: 1.938rem;
  padding-left: 30px;
  &::placeholder {
    color: ${colors.primary};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 45.625rem;
  flex-direction: column-reverse;
  @media (max-width: 425px) {
    width: 40rem;
  }
`;
