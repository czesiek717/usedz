import { PlusOutlined } from '@ant-design/icons';
import { ItemDef, PageData, PageRequest } from '@usedz/usedz-common';
import { Button, Input } from 'antd';
import React from 'react';
import { EntityGrid } from '../../components/entity-grid/entity-grid';
import './entity-list.scss';

interface Props<T> {
  pageData: PageData<T>;
  fetchData: (pageRequest: PageRequest) => Promise<PageData<T>>;
}

export const EntityList = <T extends ItemDef>(props: Props<T>) => {
  return (
    <div className="entity-list">
      <div className="entity-search">
        <Input.Search className="search-input" placeholder="Search..." onSearch={value => console.log(value)} />
        <Button type="primary" shape="round" icon={<PlusOutlined />}>
          New
        </Button>
      </div>
      <EntityGrid {...props} />
    </div>
  );
};

EntityList.defaultProps = {
  showSizeChanger: true,
  showQuickJumper: true,
  pageSizeOptions: ['12', '24', '36', '48', '60'],
  pageSize: 24
};
