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
      console.log(fields);
      try {
        const { login, password } = fields;

        const auth = fb.auth();
        await auth.signInWithEmailAndPassword(login, password);

        history.push('/account');
      } catch (error) {
        console.log(error);

        alert(error.message);
      }
    },
    [history]
  );

  return <Component onLogin={onLogin} />;
};
