import * as React from 'react';

import { storiesOf } from '@storybook/react';

import ChatInput from './View';

const onSend = (content: string) =>
  new Promise<void>(resolve => {
    setTimeout(() => {
      console.log('aqui');
      resolve();
    }, 3000);
  });

storiesOf('Layouts/ChatInput', module).add('default', () => (
  <ChatInput onSend={onSend} />
));
