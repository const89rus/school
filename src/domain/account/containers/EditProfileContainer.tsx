import React, { useCallback, useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { UserProfile } from 'domain/account/interfaces';

import { fb } from 'data/firebase/firebase';
import { AuthContext } from 'data/auth/AuthContext';

import { IEditComponent, FormFields } from '../../auth/interfaces';
import { Spinner } from 'view/common';

interface Props {
  component: React.ElementType<IEditComponent>;
}

export const EditProfileContainer: React.FC<Props> = ({ component: Component }) => {
  const { push } = useHistory();
  const [errors, setErrors] = useState<string>();
  const [profile, setProfile] = useState<UserProfile>({} as UserProfile);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    fb.database()
      .ref(`users/${currentUser?.uid}`)
      .once('value', (snapshot) => {
        const values: UserProfile = snapshot.val();
        if (!values) return;

        console.log(values);

        setProfile(values);
      });
  }, [currentUser?.uid]);

  const userUpdate = useCallback(
    async (fields: FormFields) => {
      try {
        if (!currentUser) return;

        await fb
          .database()
          .ref(`users/${currentUser.uid}`)
          .set({
            ...fields,
          });

        push('/');
      } catch (error) {
        alert('Извините, произошла техническая ошибка. Попробуйте позже');
      }
    },
    [currentUser, push]
  );

  if (isEmpty(profile)) return <Spinner />;

  return <Component userUpdate={userUpdate} errorsMessage={errors} profile={profile} />;
};
