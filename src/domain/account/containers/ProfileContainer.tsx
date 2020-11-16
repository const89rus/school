import React, { useCallback, useState, useEffect, useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { fb } from 'data/firebase/firebase';
import { AuthContext } from 'data/auth/AuthContext';

interface Props {
  component: React.ElementType<any>;
}

export const ProfileContainer: React.FC<Props> = ({ component: Component }) => {
  const [profile, setProfile] = useState<any>(null);

  const mountedRef = useRef(true);

  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  const getProfile = useCallback(async () => {
    if (!currentUser) return;
    try {
      const res = await fb.database().ref(`users/${currentUser.uid}`).once('value');

      if (!mountedRef.current) return;

      setProfile(res.val());
    } catch (error) {
      console.log(error);

      alert(error.message);
    }
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) history.push('/');
    getProfile();
  }, [currentUser, getProfile, history]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return <Component profile={profile} />;
};
