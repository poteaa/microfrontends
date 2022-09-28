import React, {lazy, Suspense, useState, useEffect} from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { createBrowserHistory } from 'history';

import Progress from "./components/Progress";
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    // BrowserRouter internally creates a Browserhistory object, we changed it
    // for Router in order to provide the history manually so we can redirect 
    // to the dashboard
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to={'/'} />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy}/>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
};