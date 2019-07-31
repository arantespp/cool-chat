import React, { useRef } from 'react';

import styled from 'styled-components';

import { Button as ButtonComponent, Input } from '../../components';

export interface Props {
  onSubmit: (name: string) => void;
  loading: boolean;
  error: any;
}

const Container = styled.div`
  max-width: 700px;
  margin: auto;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled(ButtonComponent)`
  width: 100px;
  margin-top: 10px;
`;

const View = ({ onSubmit, loading }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    const name = inputRef.current!.value;
    return onSubmit(name);
  };

  return (
    <Container>
      <p>Digite o seu nome</p>
      <Input ref={inputRef} disabled={loading} />
      <Button onClick={onClick} disabled={loading}>
        Entrar
      </Button>
    </Container>
  );
};

export default React.memo(View);
