import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app
const mount = (el) => {
  // The element can be a div in the container in order to render this App there
  ReactDOM.render(<App />, el);
}

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  console.log('Marketing in development mode');
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    console.log('Marketing mounted locally');
    mount(devRoot);
  }
}

// We are running through container and we should export the mount function,
// it allows to be framework agnostic since we are exporting the funcion and not a react component
export { mount };