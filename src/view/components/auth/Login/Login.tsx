import React from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import * as S from './styled';

export const Login: React.FC<any> = () => {
  const { register, formState } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      password: '',
    },
  });

  return (
    <S.Wrapper>
      <S.FormWrapper>
        <S.Input type="text" name="name" placeholder="логин" />
        <S.Input type="text" name="password" placeholder="пароль" />
        <S.Button appearance="secondary">Войти</S.Button>
      </S.FormWrapper>

      <S.Link href="/">забыли пароль?</S.Link>

      <S.Question>Еще нет аккаунта?</S.Question>
      <Link to="/register">
        <S.Button appearance="primary">Зарегистрироваться</S.Button>
      </Link>
    </S.Wrapper>
  );
};
