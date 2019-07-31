import React from 'react';

import styled from 'styled-components';

interface Props {
  ChatInput: React.ComponentType;
  ChatMessages: React.ComponentType;
}

const Container = styled.div`
  max-width: 700px;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Chat = ({ ChatMessages, ChatInput }: Props) => {
  return (
    <Container>
      <ChatMessages />
      <ChatInput />
    </Container>
  );
};

export default Chat;
