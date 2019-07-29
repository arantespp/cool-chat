import React from 'react';

import gql from 'graphql-tag';

import { client } from './client';

const App: React.FC = () => {
  client
    .query({
      query: gql`
        query {
          getOldMessages {
            author
            dateTime
            content
          }
        }
      `
    })
    .then(console.log)
    .catch(console.log);

  return <span>oi</span>;
};

export default App;
