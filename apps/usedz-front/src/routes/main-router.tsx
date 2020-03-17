import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { IndexPage } from '../pages/index-page/index-page';

/* export interface Props {
  
} */

export const MainRouter: React.FunctionComponent /* <Props> */ = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <IndexPage />
      </Route>
    </Switch>
  );
};
