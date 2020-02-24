import { LoadingOutlined } from '@ant-design/icons';
import { ItemDef, PageData, PageRequest } from '@usedz/usedz-common';
import { List, Spin } from 'antd';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { EntityCard } from '../entity-card/entity-card';
import './entity-grid.scss';

interface Props<T> {
  pageData: PageData<T>;
  fetchData: (pageRequest: PageRequest) => Promise<PageData<T>>;
}

export const EntityGrid = <T extends ItemDef>(props: Props<T>) => {
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
    <div className="entity-grid">
      <InfiniteScroll initialLoad={true} pageStart={0} loadMore={handleInfiniteOnLoad} hasMore={!loading && hasMore}>
        <List
          className={'entity-list'}
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
          renderItem={entity => (
            <List.Item>
              <EntityCard id={entity._id} name={entity.name} description={entity.description} image={entity.image} />
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
