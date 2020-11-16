import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { fb } from 'data/firebase/firebase';

import { ILoginComponent, FormFields } from '../interfaces/ILoginComponent';

interface Props {
  component: React.ElementType<ILoginComponent>;
}

export const LoginContainer: React.FC<Props> = ({ component: Component }) => {
  const history = useHistory();
  const [errors, setErrors] = useState<string>();

  const onLogin = useCallback(
    async (fields: FormFields) => {
      try {
        const { login, password } = fields;

        const auth = fb.auth();
        await auth.signInWithEmailAndPassword(login, password);

        history.push('/');
      } catch (error) {
        setErrors('Неверный логин или пароль.');
      }
    },
    [history]
  );

  return <Component onLogin={onLogin} errorsMessage={errors} />;
};
