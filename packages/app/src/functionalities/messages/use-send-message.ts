import gql from 'graphql-tag';

import { client } from '../client';

import { Message } from './interfaces/Message';

interface Response {
  sendMessage: Message;
}

interface Variables {
  author: string;
  content: string;
}

const SEND_MESSAGE = gql`
  mutation sendMessage($author: String!, $content: String!) {
    sendMessage(author: $author, content: $content) {
      author
      content
      dateTime
    }
  }
`;

export const useSendMessage = () => {
  const send = (variables: Variables) =>
    client.mutate<Response, Variables>({
      mutation: SEND_MESSAGE,
      variables,
      fetchPolicy: 'no-cache'
    });

  return send;
};
