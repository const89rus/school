import React from 'react';

import { useForm } from 'react-hook-form';

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

      <div>забыли пароль?</div>

      <div>Еще нет аккаунта?</div>

      <S.Button appearance="secondary">Зарегистрироваться</S.Button>
    </S.Wrapper>
  );
};
