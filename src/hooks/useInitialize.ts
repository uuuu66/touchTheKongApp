import { useState } from 'react';
import CodePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';
import UpdateState = CodePush.UpdateState;

const useInitialize = () => {
  const [errors, setErrors] = useState<string[]>([]);

  CodePush.getUpdateMetadata(UpdateState.LATEST)
    .then(update => {
      if (update) {
        // eslint-disable-next-line no-console
        console.log(
          '🚀 ~ file: useInitialize.ts ~ line 11 ~ useInitialize ~ update',
          update,
        );
      }
    })
    .catch(e => {
      // eslint-disable-next-line no-console
      console.log(
        '🚀 ~ file: useInitialize.ts ~ line 21 ~ useInitialize ~ e',
        e,
      );
      setErrors([...errors, e]);
    })
    .finally(() => {
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000);
    });
};

export default useInitialize;
