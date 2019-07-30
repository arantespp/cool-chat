import React, { useCallback, useRef, useState } from 'react';

import styled from 'styled-components';

import { Button, Input } from '../../components';

const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: stretch;

  input {
    flex: 1 1 100%;
  }
`;

export interface Props {
  onSend: (content: string) => Promise<void>;
}

const View = ({ onSend }: Props) => {
  const [waiting, setWaiting] = useState(false);

  const input = useRef<HTMLInputElement>(null);

  const buttonOnClick = useCallback(() => {
    setWaiting(true);
    onSend(input.current!.value).then(() => {
      setWaiting(false);
      input.current!.value = '';
    });
  }, [onSend]);

  return (
    <Container>
      <Input ref={input} disabled={waiting} />
      <Button onClick={buttonOnClick} disabled={waiting}>
        {waiting ? 'Enviando' : 'Enviar'}
      </Button>
    </Container>
  );
};

export default React.memo(View);
