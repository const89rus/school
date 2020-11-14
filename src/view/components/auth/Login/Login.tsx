import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { ILoginComponent } from 'domain/auth/interfaces/ILoginComponent';

import * as S from './styled';

export const Login: React.FC<ILoginComponent> = ({ onLogin }) => {
  const { register, formState, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      login: '',
      password: '',
    },
  });

  return (
    <S.Wrapper>
      <S.FormWrapper>
        <S.Input type="text" name="login" placeholder="логин" ref={register({ required: true })} />
        <S.Input
          type="password"
          name="password"
          placeholder="пароль"
          ref={register({ required: true })}
          autoComplete="off"
        />
        <S.Button appearance="secondary" disabled={!formState.isValid} onClick={handleSubmit(onLogin)}>
          Войти
        </S.Button>
      </S.FormWrapper>

      <S.Link href="/">забыли пароль?</S.Link>

      <S.Question>Еще нет аккаунта?</S.Question>
      <Link to="/register">
        <S.Button appearance="primary">Зарегистрироваться</S.Button>
      </Link>
    </S.Wrapper>
  );
};
