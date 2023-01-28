import { useLayoutEffect, useState } from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { WithoutEdges } from './types';

const useSafeContainerInsets = (withoutEdges?: WithoutEdges) => {
  const insets = useSafeAreaInsets();
  const [safeInsets, setSafeInsets] = useState<EdgeInsets>(insets);

  useLayoutEffect(() => {
    const area = {
      top: insets.top,
      bottom: insets.bottom,
      left: insets.left,
      right: insets.right,
    };
    if (typeof withoutEdges === 'string') {
      switch (withoutEdges) {
        case 'top':
          area.top = 0;
          break;
        case 'bottom':
          area.bottom = 0;
          break;
        case 'left':
          area.left = 0;
          break;
        case 'right':
          area.right = 0;
          break;
        default:
          break;
      }
    } else if (typeof withoutEdges === 'object') {
      withoutEdges?.map(edge => {
        switch (edge) {
          case 'top':
            area.top = 0;
            break;
          case 'bottom':
            area.bottom = 0;
            break;
          case 'left':
            area.left = 0;
            break;
          case 'right':
            area.right = 0;
            break;
          default:
            break;
        }
        return edge;
      });
    }
    setSafeInsets(area);
  }, [insets, withoutEdges]);

  return safeInsets;
};

export default useSafeContainerInsets;
