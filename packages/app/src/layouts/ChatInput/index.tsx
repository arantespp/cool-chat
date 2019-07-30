import React from 'react';

import { useSendMessage } from '../../functionalities';

import View from './View';

const ChatInput = () => {
  const sendMessage = useSendMessage();

  const onSend = async (content: string) => {
    try {
      await sendMessage({ author: 'Pedro', content });
    } catch (err) {
      console.log(err);
    }
  };

  return <View onSend={onSend} />;
};

export default ChatInput;
