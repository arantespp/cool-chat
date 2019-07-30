import React from 'react';

import { useAllMessages } from '../../functionalities';

import { Loading } from '../../components';

import View from './View';

const ChatMessages = () => {
  const { allMessages, loading } = useAllMessages();

  if (loading) {
    return <Loading />;
  }

  return <View messages={allMessages} username="Pedro" />;
};

export default ChatMessages;
