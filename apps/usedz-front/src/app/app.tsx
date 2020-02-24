import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { IndexPage } from '../pages/index-page/index-page';
import { MainRouter } from '../pages/main-router';
import './app.scss';

export const App: React.FunctionComponent = () => {
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
