import React from 'react';

import { useForm } from 'react-hook-form';

import { ReactComponent as Vk } from 'assets/svg/vk.svg';
import { ReactComponent as Insta } from 'assets/svg/insta.svg';

import * as S from './styled';

export const Register: React.FC<any> = () => {
  const { register, formState } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      age: '',
      city: '',
      study: '',
      mail: '',
      direction: '',
      insta: '',
      vk: '',
      password: '',
      repeat: '',
    },
  });

  return (
    <S.Wrapper>
      <S.FormWrapper>
        <S.Input type="text" name="name" placeholder="ФИО" />
        <S.Input type="text" name="age" placeholder="Возраст" />
        <S.Input type="text" name="city" placeholder="Город" />
        <S.Input type="text" name="study" placeholder="Место учебы" />
        <S.Input type="email" name="mail" placeholder="Почта" />
        <S.Input type="text" name="direction" placeholder="Выберите направление" />
        <S.Input type="text" name="insta" placeholder="{<Insta />}" />
        <S.Input type="text" name="vk" placeholder="{<Vk />}" />
        <S.Input type="password" name="password" placeholder="Придумайте пароль" />
        <S.Input type="password" name="repeat" placeholder="Повторите пароль" />
        <S.Button appearance="secondary">Зарегистрироваться</S.Button>
      </S.FormWrapper>
    </S.Wrapper>
  );
};
