import { useState } from 'react';

import { useUserData } from '../user';

export const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const { setUser, user, error } = useUserData();

  const signIn = async (name: string) => {
    setLoading(true);
    await setUser({ name });
    setLoading(false);
  };

  return { signIn, error, loading, signedIn: !!user };
};
