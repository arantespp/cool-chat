import { useState, useEffect } from 'react';

import { useUserData } from '../user';

export const useSignIn = () => {
  const { setUser, user, error } = useUserData();
  const [loading, setLoading] = useState(false);
  const [signedIn, setSignedIn] = useState(!!user);

  useEffect(() => {
    setSignedIn(!!user.name);
  }, [user.name]);

  const signIn = async (name: string) => {
    setLoading(true);
    await setUser({ name });
    setLoading(false);
  };

  return { signIn, error, loading, signedIn };
};
