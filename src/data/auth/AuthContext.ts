import React from 'react';

import firebase from 'firebase/app';

interface Props {
  currentUser: firebase.User | null;
}

export const AuthContext = React.createContext<Props>({
  currentUser: null,
});
