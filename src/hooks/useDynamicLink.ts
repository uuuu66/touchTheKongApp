import { useEffect, useState } from 'react';
import { URL } from 'react-native-url-polyfill';
import dynamicLinks, {
  FirebaseDynamicLinksTypes,
} from '@react-native-firebase/dynamic-links';
import { get } from 'lodash';

interface DynamicLinkData {
  [key: string]: string;
}

export interface DynamicLink {
  url: string;
  hostname: string;
  pathname: string;
  data: DynamicLinkData;
}

const useDynamicLink = () => {
  const [result, setResult] = useState<DynamicLink | null>(null);
  useEffect(() => {
    const foregroundLink = dynamicLinks().onLink(handleLinkReceived);
    return () => foregroundLink();
  }, []);

  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(handleLinkReceived)
      .catch(() => {});
  }, []);

  const handleLinkReceived = (
    dynamicLink: FirebaseDynamicLinksTypes.DynamicLink | null,
  ) => {
    try {
      const linkUrl = get(dynamicLink, 'url');
      const url = linkUrl ? new URL(linkUrl) : undefined;

      if (url) {
        const data: DynamicLinkData = {};
        url.searchParams.forEach((value, key) => {
          data[key] = value;
        });

        setResult({
          url: url.href,
          hostname: url.hostname,
          pathname: url.pathname,
          data,
        });
      } else {
        setResult(null);
      }
    } catch (e) {
      setResult(null);
    }
  };

  return result;
};

export default useDynamicLink;
