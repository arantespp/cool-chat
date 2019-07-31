import React from 'react';

import { useAllMessages, useUserData } from '../../functionalities';

import { Loading } from '../../components';

import View from './View';

const ChatMessages = () => {
  const { allMessages, loading } = useAllMessages();
  const { user } = useUserData();

  if (loading) {
    return <Loading />;
  }

  return <View messages={allMessages} username={user.name} />;
};

export default ChatMessages;
