import React, { FunctionComponent, useCallback, useState } from 'react';

import { FlatList, StyleSheet } from 'react-native';

import { SafeContainer } from '@src/components/atoms';

import { ActivityIndicator } from '@src/components/molecules/Button/styles';
import PhotoCard from '@src/components/molecules/PhotoCard';
import useInfiniteScroll from '@src/hooks/useInfiniteScroll';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const FeedScreen: FunctionComponent<Props> = function FeedScreen() {
  const { isLoading, handleScrollEvent } = useInfiniteScroll();
  const [items, setItems] = useState([
    { title: `title${new Date().getTime() + 1}`, id: 1 },
    { title: `title${new Date().getTime() + 2}`, id: 2 },
    { title: `title${new Date().getTime() + 3}`, id: 3 },
    { title: `title${new Date().getTime() + 4}`, id: 1 },
    { title: `title${new Date().getTime() + 5}`, id: 2 },
    { title: `title${new Date().getTime() + 6}`, id: 3 },
  ]);

  const renderCards = useCallback((item: { title: string; id: number }) => {
    return <PhotoCard title={item.title} />;
  }, []);

  return (
    <SafeContainer style={[styles.container]}>
      <FlatList
        onScroll={e =>
          handleScrollEvent(e, async () => {
            const p = new Promise(resolve => {
              let newItems: { title: string; id: number }[] = [];
              setTimeout(() => {
                newItems = [...items].concat([
                  { title: `title${new Date().getTime() + 1}`, id: 1 },
                  { title: `title${new Date().getTime() + 2}`, id: 2 },
                  { title: `title${new Date().getTime() + 3}`, id: 3 },
                  { title: `title${new Date().getTime() + 4}`, id: 1 },
                  { title: `title${new Date().getTime() + 5}`, id: 2 },
                  { title: `title${new Date().getTime() + 6}`, id: 3 },
                ]);
                resolve(newItems);
              }, 2000);
            }).then(value => {
              setItems(value as { title: string; id: number }[]);
            });
            return p;
          })
        }
        onEndReachedThreshold={0}
        data={items}
        style={[styles.scrollView]}
        keyExtractor={_ => _.title}
        renderItem={info => {
          return renderCards(info.item);
        }}
        ListFooterComponent={
          isLoading ? <ActivityIndicator size={'large'} /> : null
        }
      />
    </SafeContainer>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
