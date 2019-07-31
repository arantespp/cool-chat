import { useEffect, useState } from 'react';

import gql from 'graphql-tag';

import { client } from '../client';

import { Message } from './interfaces/Message';

interface Response {
  getOldMessages: Message[];
}

const GET_OLD_MESSAGES = gql`
  query {
    getOldMessages {
      author
      dateTime
      content
    }
  }
`;

export const useGetOldMessages = () => {
  const [response, setResponse] = useState<{
    data?: Response;
    loading: boolean;
    errors?: any;
  }>({ loading: true });

  useEffect(() => {
    client
      .query<Response>({
        query: GET_OLD_MESSAGES
      })
      .then(({ data, loading, errors }) => {
        setResponse({ data, loading, errors });
      });
  }, [response.loading]);

  return response;
};
