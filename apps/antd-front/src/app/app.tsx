import { RegionDef, TypeDef, Entities, MoveDef, PageRequest, PokemonDef, EntityProperties } from '@usedz/usedz-common';
import { getPageOfEntities } from '@usedz/usedz-frontend';
import React, { useEffect, useState } from 'react';
import './app.scss';
import { EntityCard } from '../components/entity-card/entity-card';
import { Link, Switch, Route } from 'react-router-dom';
import { MainRouter } from '../pages/main-router';
import { IndexPage } from '../pages/index-page/index-page';
import { useStore } from './app-store';

export const App: React.FunctionComponent = () => {
  // const fetchData = useStore(state => state.fetchData);

  // useEffect(() => {
  //   const pageRequest: PageRequest = { pageNumber: 0, pageSize: 20 };
  //   fetchData<RegionDef>(Entities.REGION.pluralName, pageRequest);
  //   fetchData<TypeDef>(Entities.TYPE.pluralName, pageRequest);
  //   fetchData<MoveDef>(Entities.MOVE.pluralName, pageRequest);
  //   fetchData<PokemonDef>(Entities.POKEMON.pluralName, pageRequest);
  // }, []);

  return (
    <div className="container">
      <div className="container-buffer" />
      <div className="container-main">
        <Switch>
          <Route path="/usedz">
            <MainRouter />
          </Route>
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
      </div>
      <div className="container-buffer" />
    </div>
  );
};
