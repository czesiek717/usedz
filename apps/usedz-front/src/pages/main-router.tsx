import { Entities } from '@usedz/usedz-common';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useStore } from '../app/app-store';
import { EntityList } from '../pages/entity-list/entity-list';

/* export interface Props {
  
} */

export const MainRouter: React.FunctionComponent /* <Props> */ = () => {
  const match = useRouteMatch();

  const fetchItems = useStore(state => state.fetchItems);

  const items = useStore(state => state.items);

  return (
    <Switch>
      <Route path={`${match.url}/${Entities.ITEM.pluralName}`} exact>
        <EntityList pageData={items} fetchData={fetchItems} />
      </Route>
    </Switch>
  );
};
