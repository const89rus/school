import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';

import { fb } from 'data/firebase/firebase';

import { AuthContext } from './AuthContext';

import { Spinner } from 'view/common';

export const AuthContextProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fb.auth().onAuthStateChanged((user: firebase.User | null) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
