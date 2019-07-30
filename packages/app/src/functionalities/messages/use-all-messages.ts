import { useEffect, useState } from 'react';

import { useGetOldMessages } from './use-get-old-messages';
import { useSentMessage } from './use-sent-message';

import { Message } from '../interfaces';

export const useAllMessages = () => {
  const { data, loading } = useGetOldMessages();
  const sentMessage = useSentMessage();
  const [allMessages, setAllMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (data && data.getOldMessages) {
      setAllMessages(all => [...data.getOldMessages, ...all]);
    }
  }, [data]);

  useEffect(() => {
    if (sentMessage) {
      setAllMessages(all => {
        const isSameMessage = ({ author, content, dateTime }: Message) =>
          author === sentMessage.author &&
          content === sentMessage.content &&
          dateTime === sentMessage.dateTime;
        const messageAlreadySaved = all.find(isSameMessage);
        if (messageAlreadySaved) {
          return all;
        }
        return [...all, sentMessage];
      });
    }
  }, [sentMessage]);

  return { allMessages, loading };
};
