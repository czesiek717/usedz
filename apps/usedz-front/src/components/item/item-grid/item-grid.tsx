import { LoadingOutlined } from '@ant-design/icons';
import { ItemDef, PageData, PageRequest } from '@usedz/usedz-common';
import { List, Spin } from 'antd';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { ItemCard } from '../item-card/item-card';
import './item-grid.scss';

interface Props {
  pageData: PageData<ItemDef>;
  fetchData: (pageRequest: PageRequest) => Promise<PageData<ItemDef>>;
}

export const ItemGrid = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const handleInfiniteOnLoad = async (pageNumber: number) => {
    setLoading(true);
    if (!props.pageData.hasMore) {
      setLoading(false);
      setHasMore(false);
      return;
    }
    await props.fetchData({ pageNumber, pageSize: 24 });
    setLoading(false);
  };

  return (
    <div className="item-grid">
      <InfiniteScroll initialLoad={true} pageStart={0} loadMore={handleInfiniteOnLoad} hasMore={!loading && hasMore}>
        <List
          className={'item-list'}
          loadMore={
            loading ? (
              <Spin key="spinner" tip="loading..." indicator={<LoadingOutlined style={{ fontSize: '4em' }} spin />} />
            ) : null
          }
          grid={{
            gutter: 12,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 6
          }}
          dataSource={props.pageData.data}
          renderItem={item => (
            <List.Item>
              <ItemCard {...item} />
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
