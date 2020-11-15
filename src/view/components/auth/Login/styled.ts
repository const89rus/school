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
  height: 16.621rem;
  width: 29.375rem;
  display: flex;
  flex-direction: column;
`;

export const Button = styled(ButtonUi)`
  height: 4.308rem;
  padding: 0.625rem 3.25rem;
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.95125rem;
  color: ${colors.white};
  font-family: Comfortaa;
`;

export const Input = styled.input`
  height: 6.144rem;
  border: none;
  color: ${colors.primary};
  font-family: Comfortaa;
  font-size: 1.75rem;
  line-height: 1.938rem;
  padding-left: 30px;
  &::placeholder {
    color: ${colors.primary};
  }

  &:first-child {
    border-bottom: 3px dashed ${colors.primary};
  }
`;

export const Link = styled.a`
  color: #fff;
  font-size: 1.25rem;
  margin: 0.5rem 0;
  $:hover {
    text-decoration: none;
    color: red;
  }
`;

export const Question = styled.div`
  color: ${colors.white};
  font-size: 1.75rem;
  margin: 2.1875rem 0 1.6875rem;
`;
