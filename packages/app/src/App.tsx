import React from 'react';

import { useAllMessages } from './functionalities';

const App: React.FC = () => {
  const { allMessages, loading } = useAllMessages();

  console.log(allMessages, loading);

  return <span>oi</span>;
};

export default App;
