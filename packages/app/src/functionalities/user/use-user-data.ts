import { useEffect, useState } from 'react';
import localforage from 'localforage';

import { User } from './interfaces/User';

const key = 'user-data';

export const useUserData = () => {
  const [user, setUserState] = useState<User>({ name: '' });
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    localforage
      .getItem<User>(key)
      .then(user => {
        if (user) {
          setUserState(user);
        }
      })
      .catch(err => setError(err));
  }, [user.name]);

  const setUser = async (user: User) => {
    try {
      const u = await localforage.setItem<User>('user-data', user);
      setUserState(u);
    } catch (err) {
      setError(err);
    }
  };

  return { setUser, user, error };
};
