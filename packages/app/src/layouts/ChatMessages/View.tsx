import React from 'react';

import styled from 'styled-components';

import { Message } from '../../functionalities';

import ChatMessageCard from '../ChatMessageCard';

export interface Props {
  messages: Message[];
  username: string;
}

const Container = styled.div`
  overflow-y: scroll;
`;

const View = ({ messages, username }: Props) => {
  return (
    <Container>
      {messages.map((message, index) => {
        return (
          <ChatMessageCard
            key={index}
            {...message}
            isYou={username === message.author}
          />
        );
      })}
    </Container>
  );
};

export default React.memo(View);
