import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';

import firebase from 'firebase';

import { FormFields } from 'domain/auth/interfaces';
import { isValidPassword, isValidEmail } from 'domain/app/utils/validate';

import { Alert, Spinner } from 'view/common';

import * as S from './styled';

export const Edit: React.FC<any> = ({ profile, errorsMessage }) => {
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

  console.log(profile);

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

  const backButton = () => {
    window.location.assign('/');
  };

  const history = useHistory();
  const userUpdate = useCallback(
    async (fields: FormFields) => {
      try {
        const { password, repeat, ...rest } = fields;

        if (password !== repeat) {
          alert('Пароли не совпадают');
        }

        const user = firebase.auth().currentUser;

        if (user) {
          await firebase
            .database()
            .ref(`users/${user.uid}`)
            .set({
              ...rest,
            });
        }
        history.push('/');
      } catch (error) {
        alert('Извините, произошла техническая ошибка. Попробуйте позже');
      }
    },
    [history]
  );

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
          placeholder="Введите новый пароль"
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
      <S.ButtonWrapper>
        <S.Button appearance="primary" onClick={backButton}>
          Назад
        </S.Button>
        <S.Button appearance="primary" onClick={handleSubmit(userUpdate)} disabled={!formState.isValid}>
          Изменить профиль
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};
