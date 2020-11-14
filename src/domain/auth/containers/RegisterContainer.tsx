import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { fb } from 'data/firebase/firebase';

import { IRegisterComponent, FormFields } from '../interfaces';

interface Props {
  component: React.ElementType<IRegisterComponent>;
}

export const RegisterContainer: React.FC<Props> = ({ component: Component }) => {
  const history = useHistory();
  const [errors, setErrors] = useState<string>();
  const onRegister = useCallback(
    async (fields: FormFields) => {
      console.log(fields);
      try {
        const { email, password, repeat, ...rest } = fields;

        if (password !== repeat) {
          setErrors('Пароли не совпадают');
        }

        const auth = fb.auth();
        const userReq = await auth.createUserWithEmailAndPassword(email, password);

        if (userReq) {
          await fb
            .database()
            .ref(`users/${userReq.user?.uid}`)
            .set({
              ...rest,
              email,
            });

          await auth.currentUser?.updateProfile({
            displayName: name,
          });
        }

        history.push('/account');
      } catch (error) {
        alert(error.message);
      }
    },
    [history]
  );

  return <Component onRegister={onRegister} errors={errors} />;
};
