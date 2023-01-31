import React, { FunctionComponent } from 'react';
import { FeedStackNavigator } from '@src/navigations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const FeedScreen: FunctionComponent<Props> = function FeedScreen() {
  return <FeedStackNavigator />;
};

export default FeedScreen;
