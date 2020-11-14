import React from 'react';
import { useForm } from 'react-hook-form';
import { isEmpty } from 'lodash';

import { IRegisterComponent, FormFields } from 'domain/auth/interfaces';
import { isValidPassword, isValidEmail } from 'domain/app/utils/validate';

import * as S from './styled';

export const Register: React.FC<IRegisterComponent> = ({ onRegister }) => {
  const { register, formState, handleSubmit, errors } = useForm<FormFields>({
    mode: 'onChange',
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

  console.log(errors);

  return (
    <S.Wrapper>
      {!isEmpty(errors) && (
        <S.ErorsWrapper>
          <div>- Все поля обязательны</div>
        </S.ErorsWrapper>
      )}
      <S.FormWrapper>
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
        <S.Input type="email" name="email" placeholder="Почта" autoComplete="off" ref={register({ required: true })} />
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
            // validate: {
            //   symbols: isValidPassword,
            // },
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
            // validate: {
            //   symbols: isValidPassword,
            // },
          })}
        />
        <S.Button appearance="secondary" onClick={handleSubmit(onRegister)}>
          Зарегистрироваться
        </S.Button>
      </S.FormWrapper>
    </S.Wrapper>
  );
};
