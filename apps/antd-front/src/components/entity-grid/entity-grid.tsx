import { PageData, PageRequest, EntityDef } from '@usedz/usedz-common';
import { List, Input, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { EntityCard } from '../entity-card/entity-card';
import './entity-grid.scss';
import { PlusOutlined } from '@ant-design/icons';

interface Props<T> {
  pageData: PageData<T>;
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  pageSizeOptions?: string[];
  pageSize?: number;
  fetchData: (pageRequest: PageRequest) => Promise<PageData<T>>;
}

export const EntityGrid = <T extends EntityDef>(props: Props<T>) => {
  const [pageSize, setPageSize] = useState<number>(props.pageSize);

  const pageRequest: PageRequest = { pageNumber: 1, pageSize: props.pageSize };

  useEffect(() => {
    props.fetchData(pageRequest);
  }, []);

  const handleChanges = (pageNumber: number, pageSize?: number) => {
    props.fetchData({ pageNumber, pageSize });
  };

  const handleSizeChange = (pageNumber: number, pageSize: number) => {
    setPageSize(pageSize);
    props.fetchData({ pageNumber, pageSize });
  };

  const total = (total: number, range: [number, number]) => (
    <div>
      {range[0]}-{range[1]} of {total}
    </div>
  );

  return (
    <div className="entity-grid">
      <div className="entity-search">
        <Input.Search className="search-input" placeholder="Search..." onSearch={value => console.log(value)} />
        <Button type="primary" shape="round" icon={<PlusOutlined />}>
          New
        </Button>
      </div>
      <List
        className={'entity-list'}
        grid={{
          gutter: 12,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 6
        }}
        pagination={{
          size: 'small',
          total: props.pageData.totalCount,
          pageSize: pageSize,
          pageSizeOptions: props.pageSizeOptions,
          showTotal: total,
          onChange: handleChanges,
          showSizeChanger: props.showSizeChanger,
          showQuickJumper: props.showQuickJumper,
          onShowSizeChange: handleSizeChange
        }}
        dataSource={props.pageData.data}
        renderItem={entity => (
          <List.Item>
            <EntityCard id={entity._id} name={entity.name} description={entity.description} image={entity.image} />
          </List.Item>
        )}
      />
    </div>
  );
};

EntityGrid.defaultProps = {
  showSizeChanger: true,
  showQuickJumper: true,
  pageSizeOptions: ['12', '24', '36', '48', '60'],
  pageSize: 24
};
