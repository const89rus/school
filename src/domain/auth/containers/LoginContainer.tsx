import React, { useCallback } from 'react';

import { ILoginComponent } from '../interfaces';

interface Props {
  component: React.ElementType<ILoginComponent>;
}

export const LoginContainer: React.FC<Props> = ({ component: Component }) => {
  const onLogin = useCallback(() => {
    console.log('login');
  }, []);

  return <Component onLogin={onLogin} />;
};
