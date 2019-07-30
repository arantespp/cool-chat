import React from 'react';

import moment from 'moment';
import styled from 'styled-components';

import { Message } from '../../functionalities';

import { Card } from '../../components';

export interface Props extends Message {
  isYou: boolean;
}

const Container = styled.div<{ align: 'right' | 'left' }>`
  margin: 10px;
  ${({ align }) => `margin-${align}: 50px`}
`;

const Footer = styled.p`
  text-align: right;
  font-size: 0.9em;
  margin: 0px;
  font-style: italic;
`;

const Content = styled.p`
  font-size: 1.2em;
  margin: 10px;
`;

const View = ({ author, content, dateTime, isYou }: Props) => {
  return (
    <Container align={isYou ? 'left' : 'right'}>
      <Card>
        <Content>{content}</Content>
        <Footer>
          {author}, às {moment(dateTime).format('HH:mm DD/MM/YY')}
        </Footer>
      </Card>
    </Container>
  );
};

export default View;
