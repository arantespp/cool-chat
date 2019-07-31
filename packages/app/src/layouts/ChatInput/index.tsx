import React from 'react';

import { useSendMessage, useUserData } from '../../functionalities';

import View from './View';

const ChatInput = () => {
  const sendMessage = useSendMessage();
  const { user } = useUserData();

  const onSend = async (content: string) => {
    try {
      await sendMessage({ author: user.name, content });
    } catch (err) {
      console.log(err);
    }
  };

  return <View onSend={onSend} />;
};

export default ChatInput;
