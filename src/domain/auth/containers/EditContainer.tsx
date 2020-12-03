import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { fb } from 'data/firebase/firebase';

import { IEditComponent, FormFields } from '../interfaces';

interface Props {
  component: React.ElementType<IEditComponent>;
}

export const EditContainer: React.FC<Props> = ({ component: Component }) => {
  const history = useHistory();
  const [errors, setErrors] = useState<string>();

  const onEdit = useCallback(
    async (fields: FormFields) => {
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
        setErrors('Извините, произошла техническая ошибка. Попробуйте позже');
      }
    },
    [history]
  );

  return <Component onEdit={onEdit} errorsMessage={errors} />;
};
