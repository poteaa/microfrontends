import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    // This is important since the memoryrouter initiates on / and requires a history event
    // to refresh the url so we have to click twice to achieve that, with this we provide
    // an initial path
    initialEntries: [initialPath]
  });

  if (onNavigate) {
    history.listen(onNavigate);
  }
  // The element can be a div in the container in order to render this App there
  ReactDOM.render(<App history={history}/>, el);

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

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  console.log('Marketing in development mode');
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    console.log('Marketing mounted locally');
    mount(devRoot, { defaultHistory: createBrowserHistory()});
  }
}

// We are running through container and we should export the mount function,
// it allows to be framework agnostic since we are exporting the funcion and not a react component
export { mount };