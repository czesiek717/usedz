import { Entities } from '@usedz/usedz-common';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useStore } from '../app/app-store';
import { EntityGrid } from '../components/entity-grid/entity-grid';

/* export interface Props {
  
} */

export const MainRouter: React.FunctionComponent /* <Props> */ = () => {
  const match = useRouteMatch();

  const fetchItems = useStore(state => state.fetchItems);
  // const fetchTypes = useStore(state => state.fetchTypes);
  // const fetchMoves = useStore(state => state.fetchMoves);
  // const fetchPokemons = useStore(state => state.fetchPokemons);

  const items = useStore(state => state.items);
  // const types = useStore(state => state.types);
  // const moves = useStore(state => state.moves);
  // const pokemons = useStore(state => state.pokemons);

  return (
    <Switch>
      <Route path={`${match.url}/${Entities.ITEM.pluralName}`} exact>
        <EntityGrid pageData={items} fetchData={fetchItems} />
      </Route>
    </Switch>
  );
};
