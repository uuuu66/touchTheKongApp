import { useRef, useState } from 'react';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

const useInfiniteScroll = () => {
  const ref = useRef<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const handleScrollEvent = async (
    e: NativeSyntheticEvent<NativeScrollEvent>,
    asyncFunc: (e?: NativeSyntheticEvent<NativeScrollEvent>) => Promise<any>,
  ) => {
    // 현재 스크롤 값
    const updateScroll = e.nativeEvent.contentOffset.y;
    if (updateScroll === 0) {
      return;
    }

    // 현재 보여지는 화면 높이
    const screenHeight = e.nativeEvent.layoutMeasurement.height;
    // 전체 문서의 높이
    const documentHeight = e.nativeEvent.contentSize.height;

    // 원하는 로직을 시작하는 시점
    const endPoint = 100;

    if (screenHeight + updateScroll + endPoint >= documentHeight) {
      // 로직처리
      setLoading(true);
      if (ref.current === false) {
        ref.current = true;
        asyncFunc()
          .then(() => {
            ref.current = false;
            setLoading(false);
          })
          .catch(() => {
            ref.current = false;
            setLoading(false);
          });
      }
    }
  };
  return { isLoading, handleScrollEvent };
};
export default useInfiniteScroll;
