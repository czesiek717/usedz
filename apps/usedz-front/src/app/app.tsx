import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ItemRouter } from '../routes/item-router';
import { MainRouter } from '../routes/main-router';
import './app.scss';

export const App: React.FunctionComponent = () => {
  return (
    <div className="container">
      <div className="container-buffer" />
      <div className="container-main">
        <Switch>
          <Route path="/" exact>
            <MainRouter />
          </Route>
          <Route path="/items">
            <ItemRouter />
          </Route>
        </Switch>
      </div>
      <div className="container-buffer" />
    </div>
  );
};
