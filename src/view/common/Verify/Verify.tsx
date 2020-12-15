import React from 'react';

import { IVerifyEmailComponent, FormFields } from 'domain/auth/interfaces';

import * as S from './styled';
import { useForm } from 'react-hook-form';
import { fb } from 'data/firebase/firebase';

export const Verify: React.FC<IVerifyEmailComponent> = ({ Verify }) => {
  const { handleSubmit } = useForm<FormFields>({
    //не знаю, можно ли убрать это и ничего не сломать:
    mode: 'onBlur',
    defaultValues: {
      name: '',
      age: '',
      city: '',
      study: '',
      email: '',
      social: '',
    },
  });

  const isVerify = fb.auth().currentUser?.emailVerified;
  return isVerify ? (
    <S.Verifyed>Email подтвержден</S.Verifyed>
  ) : (
    <S.Verify onClick={handleSubmit(Verify)}>Подтвердите email</S.Verify>
  );
};
