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
  height: 32.275rem;
  width: 45.625rem;
  display: flex;
  flex-direction: column;
`;

export const Button = styled(ButtonUi)`
  padding: 0.625rem 11.4375rem;
  height: 3.2425rem;
  font-size: 1.875rem;
  line-height: 2.063rem;
  color: ${colors.white};
  font-family: Comfortaa;
`;

export const Input = styled.input`
  height: 6.144rem;
  border: none;
  font-family: Comfortaa;
  outline: none;
  font-size: 1.5rem;
  line-height: 1.938rem;
  padding-left: 30px;
  border-bottom: 3px dashed ${colors.primary};
  &::placeholder {
    color: ${colors.primary};
  }

  &:last-child {
    border-bottom: none;
  }
`;
