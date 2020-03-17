import { PlusOutlined } from '@ant-design/icons';
import { ItemDef, PageData, PageRequest } from '@usedz/usedz-common';
import { Button, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { ItemGrid } from '../../components/item/item-grid/item-grid';
import './item-list.scss';

interface Props {
  pageData: PageData<ItemDef>;
  fetchData: (pageRequest: PageRequest) => Promise<PageData<ItemDef>>;
}

export const ItemList = (props: Props) => {
  return (
    <div className="item-list">
      <div className="item-search">
        <Input.Search className="search-input" placeholder="Search..." onSearch={value => console.log(value)} />
        <Link to="/items/new">
          <Button type="primary" shape="round" icon={<PlusOutlined />}>
            New
          </Button>
        </Link>
      </div>
      <ItemGrid {...props} />
    </div>
  );
};

ItemList.defaultProps = {
  showSizeChanger: true,
  showQuickJumper: true,
  pageSizeOptions: ['12', '24', '36', '48', '60'],
  pageSize: 24
};
