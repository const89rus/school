import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { fb } from 'data/firebase/firebase';

import { IVerifyEmailComponent } from '../interfaces/IVerifyEmailComponent';

interface Props {
  component: React.ElementType<IVerifyEmailComponent>;
}

export const VerifyEmailContainer: React.FC<Props> = ({ component: Component }) => {
  const history = useHistory();

  const Verify = useCallback(async () => {
    try {
      const user = fb.auth().currentUser;
      await user
        ?.sendEmailVerification()
        .then(() => {
          //email sent
          alert('Пожалуйста, проверьте почту');
          history.push('/');
        })
        .catch((error) => {
          console.error(error);
        });
    } finally {
      //s
    }
  }, [history]);

  return <Component Verify={Verify} />;
};
