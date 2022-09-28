import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
  const history = 
    defaultHistory || 
    createMemoryHistory({
      initialEntries: [initialPath]
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App onSignIn={onSignIn} history={history}/>, el);

  return {
    onParentNavigate({pathname: nextPathname}) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
      console.log('Container just navigated');
    }
  };
}

if (process.env.NODE_ENV === 'development') {
  console.log('Auth in development mode');
  const devRoot = document.querySelector('#auth-dev-root');

  if (devRoot) {
    console.log('Auth mounted locally');
    mount(devRoot, { defaultHistory: createBrowserHistory()});
  }
}

export { mount };