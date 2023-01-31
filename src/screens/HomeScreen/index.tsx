import React, { FunctionComponent } from 'react';

import { SafeContainer } from '@src/components/atoms';

import WaveView from '@src/components/atoms/WaveView';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const HomeScreen: FunctionComponent<Props> = function HomeScreen() {
  return (
    <SafeContainer>
      <WaveView />
    </SafeContainer>
  );
};

export default HomeScreen;
