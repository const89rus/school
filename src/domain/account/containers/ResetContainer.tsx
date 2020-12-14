import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { fb } from 'data/firebase/firebase';

import { FormFields, IResetComponent } from '../../auth/interfaces';

interface Props {
  component: React.ElementType<IResetComponent>;
}

export const ResetContainer: React.FC<Props> = ({ component: Component }) => {
  const history = useHistory();
  //const [errors, setErrors] = useState<string>();
  const onReset = useCallback(
    async (fields: FormFields) => {
      const email = fields.email;
      const auth = fb.auth();
      await auth
        .sendPasswordResetEmail(email)
        .then(function () {
          alert('Пожалуйста, проверьте почту');
          history.push('/');
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    [history]
  );

  return <Component onReset={onReset} />;
};
