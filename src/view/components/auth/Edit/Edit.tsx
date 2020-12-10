import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isEmpty } from 'lodash';

import { FormFields, IEditComponent } from 'domain/auth/interfaces';
import { isValidEmail } from 'domain/app/utils/validate';

import { Alert } from 'view/common';

import * as S from './styled';

export const Edit: React.FC<IEditComponent> = ({ userUpdate, errorsMessage, profile }) => {
  const { push } = useHistory();

  const { register, formState, handleSubmit, errors, setValue } = useForm<FormFields>({
    mode: 'onBlur',
    defaultValues: {
      name: profile.name,
      age: profile.age,
      city: profile.city,
      study: profile.study,
      email: profile.email,
      social: profile.social,
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

  const backButton = useCallback(() => {
    push('/');
  }, [push]);

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
