import * as React from 'react';

import { storiesOf } from '@storybook/react';

import ChatMessageCard, { Props } from './View';

const props: Props = {
  author: 'Pedro',
  dateTime: '2019-02-02T23:23:23',
  content: 'alguma mensagem',
  isYou: false
};

storiesOf('Layouts/ChatMessageCard', module)
  .add('is you', () => <ChatMessageCard {...props} isYou={true} />)
  .add('is not you', () => <ChatMessageCard {...props} isYou={false} />);
