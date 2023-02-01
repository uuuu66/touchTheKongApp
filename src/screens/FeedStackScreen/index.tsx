import React, { FunctionComponent } from 'react';
import FeedStackNavigator from '@src/navigations/FeedStackNavigator';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const FeedStackScreen: FunctionComponent<Props> = function FeedStackScreen() {
  return <FeedStackNavigator />;
};

export default FeedStackScreen;
