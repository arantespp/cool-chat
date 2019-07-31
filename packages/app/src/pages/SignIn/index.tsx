import React, { useCallback } from 'react';

import { Redirect } from 'react-router-dom';

import View from './View';

import { useSignIn } from '../../functionalities';

const SignIn = () => {
  const { signIn, signedIn, loading, error } = useSignIn();

  console.log('aqui');

  const onSubmit = useCallback((name: string) => {
    signIn(name);
  }, []);

  if (signedIn) {
    return <Redirect to="/" />;
  }

  return <View onSubmit={onSubmit} loading={loading} error={error} />;
};

export default SignIn;
