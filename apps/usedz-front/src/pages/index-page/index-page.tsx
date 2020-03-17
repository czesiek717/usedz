import React from 'react';
import { useStore } from '../../app/app-store';
import { ItemList } from '../item-list/item-list';
import './index-page.scss';

// export interface Props {}

export const IndexPage: React.FunctionComponent /* <Props> */ = (/* props: Props */) => {
  const fetchItems = useStore(state => state.fetchItems);
  const items = useStore(state => state.items);

  return (
    <div className="index-page">
      <ItemList pageData={items} fetchData={fetchItems} />
    </div>
  );
};
