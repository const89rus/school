import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { isEmpty } from 'lodash';

import { IRegisterComponent, FormFields } from 'domain/auth/interfaces';
import { isValidPassword, isValidEmail } from 'domain/app/utils/validate';

import { Alert } from 'view/common';

import * as S from './styled';

export const Register: React.FC<IRegisterComponent> = ({ onRegister, errorsMessage }) => {
  const { register, formState, handleSubmit, errors } = useForm<FormFields>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      age: '',
      city: '',
      study: '',
      email: '',
      social: '',
      password: '',
      repeat: '',
    },
  });

  const errorsAlert = useCallback(() => {
    if (isEmpty(errors)) return null;

    if (errorsMessage)
      return (
        <Alert>
          <div>- Пароли не совпадают</div>
        </Alert>
      );

    return (
      <Alert>
        <div>- Все поля обязательны</div>
        {errors.email && <div>- Неверный email</div>}
        {errors.password && (
          <div>
            - Минимальная длинна пароля 5 символов. Пароль может состоять только из латинских букв, цифр и символов
          </div>
        )}
      </Alert>
    );
  }, [errors, errorsMessage]);

  return (
    <S.Wrapper>
      <S.FormWrapper>
        {errorsAlert()}
        <S.Input type="text" name="name" placeholder="ФИО" autoComplete="off" ref={register({ required: true })} />
        <S.Input type="text" name="age" placeholder="Возраст" autoComplete="off" ref={register({ required: true })} />
        <S.Input type="text" name="city" placeholder="Город" autoComplete="off" ref={register({ required: true })} />
        <S.Input
          type="text"
          name="study"
          placeholder="Место учебы"
          autoComplete="off"
          ref={register({ required: true })}
        />
        <S.Input
          type="email"
          name="email"
          placeholder="Почта"
          autoComplete="off"
          ref={register({ required: true, validate: { validEmail: isValidEmail } })}
        />
        <S.Input
          type="text"
          name="social"
          placeholder="Ссылка на социальную сеть"
          autoComplete="off"
          ref={register({ required: true })}
        />
        <S.Input
          type="password"
          name="password"
          placeholder="Придумайте пароль"
          autoComplete="off"
          ref={register({
            required: true,
            minLength: { value: 5, message: 'Минимальная длина пароля 5 символов.' },
            validate: {
              symbols: isValidPassword,
            },
          })}
        />
        <S.Input
          type="password"
          name="repeat"
          placeholder="Повторите пароль"
          autoComplete="off"
          ref={register({
            required: true,
            minLength: { value: 5, message: 'Минимальная длина пароля 5 символов.' },
            validate: {
              symbols: isValidPassword,
            },
          })}
        />
      </S.FormWrapper>
      <S.Button appearance="secondary" onClick={handleSubmit(onRegister)} disabled={!formState.isValid}>
        Зарегистрироваться
      </S.Button>
    </S.Wrapper>
  );
};
