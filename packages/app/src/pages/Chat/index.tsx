import React from 'react';

import View from './View';

import ChatInput from '../../layouts/ChatInput';
import ChatMessages from '../../layouts/ChatMessages';

const Chat = () => {
  return <View ChatInput={ChatInput} ChatMessages={ChatMessages} />;
};

export default Chat;
