import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';


const mount = (el) => {
  const app = createApp(Dashboard);
  // Following mount fn is not related to our mount fn, it is from vue
  app.mount(el);
  
}

if (process.env.NODE_ENV === 'development') {
  console.log('Auth in development mode');
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    console.log('Auth mounted locally');
    mount(devRoot);
  }
}

export { mount };