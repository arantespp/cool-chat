import { useEffect, useState } from 'react';
import gql from 'graphql-tag';

import { Message } from '../interfaces';

import { client } from '../client';

interface Response {
  data: {
    sentMessage: Message;
  };
}

const SENT_MESSAGE = gql`
  subscription {
    sentMessage {
      author
      dateTime
      content
    }
  }
`;

export const useSentMessage = () => {
  const [sentMessage, setSentMessage] = useState<Message>();

  useEffect(() => {
    const subscription = client
      .subscribe<Response>({
        query: SENT_MESSAGE
      })
      .subscribe(
        ({ data }) => {
          console.log('AAAAAAAa');
          setSentMessage(data.sentMessage);
        },
        error => console.log(error)
      );

    return () => subscription.unsubscribe();
  }, []);

  return sentMessage;
};
