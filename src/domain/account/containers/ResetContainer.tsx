import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { fb } from 'data/firebase/firebase';

import { IResetComponent, FormFields } from '../../auth/interfaces';

interface Props {
  component: React.ElementType<IResetComponent>;
}

export const ResetContainer: React.FC<Props> = ({ component: Component }) => {
  const history = useHistory();
  //const [errors, setErrors] = useState<string>();

  const onReset = useCallback(async () => {
    const emailAddress = 'user@example.com';
    const auth = fb.auth();
    await auth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        history.push('/account');
      })
      .catch(function (error) {
        alert(error);
      });
  }, [history]);

  return <Component onReset={onReset} />;
};
