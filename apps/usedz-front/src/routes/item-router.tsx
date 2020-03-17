import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { ItemForm } from '../components/item/item-from/item-form';

/* export interface Props {
  
} */

export const ItemRouter: React.FunctionComponent /* <Props> */ = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}/new`} exact>
        <ItemForm />
      </Route>
    </Switch>
  );
};
