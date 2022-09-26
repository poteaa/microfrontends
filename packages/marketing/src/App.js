import React from "react";
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

// For prod, material-ui for the css styles generates names such as 'jss1', 'jss2', etc, so it
// can collide with other styles, to avoid that we are adding the prefix ma => 'ma1'
const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default ({ history }) => {
  return <div>
    {/* StylesProvider is a react component used to customize all the
    css and js generation stuff */}
    <StylesProvider generateClassName={generateClassName}>
      {/* Router does not create its own history object, we have to provide it*/}
      <Router history={history}>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  </div>
};