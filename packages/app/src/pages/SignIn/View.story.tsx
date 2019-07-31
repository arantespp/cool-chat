import * as React from 'react';

import { storiesOf } from '@storybook/react';

import SignIn from './View';

const onSubmit = (content: string) => {};

storiesOf('Pages/SignIn', module).add('default', () => (
  <SignIn onSubmit={onSubmit} loading={false} error={null} />
));
