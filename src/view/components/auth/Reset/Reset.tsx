import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isEmpty } from 'lodash';

import { FormFields, IResetComponent } from 'domain/auth/interfaces';
import { isValidEmail } from 'domain/app/utils/validate';

import { Alert } from 'view/common';

import * as S from './styled';

export const Reset: React.FC<IResetComponent> = ({ onReset }) => {
  const { push } = useHistory();

  const { register, formState, handleSubmit, errors, setValue } = useForm<FormFields>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
  });

  const errorsAlert = useCallback(() => {
    if (isEmpty(errors)) return null;

    return <Alert>{errors.email && <div>- Неверный email</div>}</Alert>;
  }, [errors]);

  const backButton = useCallback(() => {
    push('/');
  }, [push]);

  return (
    <S.Wrapper>
      <S.FormWrapper>
        {errorsAlert()}
        <S.Input
          id="email"
          type="email"
          name="email"
          placeholder="Введите email"
          autoComplete="off"
          ref={register({ required: true, validate: { validEmail: isValidEmail } })}
        />
      </S.FormWrapper>
      <S.ButtonWrapper>
        <S.Button appearance="primary" onClick={backButton}>
          Назад
        </S.Button>
        <S.Button appearance="primary" onClick={handleSubmit(onReset)} disabled={!formState.isValid}>
          Сбросить пароль
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};
