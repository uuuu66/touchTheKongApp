import React, { FunctionComponent } from 'react';

import { SafeContainer } from '@src/components/atoms';

import LoadingVew from '@src/components/atoms/LoadingView';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const HomeScreen: FunctionComponent<Props> = function HomeScreen() {
  return (
    <SafeContainer>
      <LoadingVew />
    </SafeContainer>
  );
};

export default HomeScreen;
