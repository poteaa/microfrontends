import faker from 'faker';


const mount = (el) => {
  console.log('Mounting products');
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
  }
  
  el.innerHTML = products;
}

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render our app into that element
if (process.env.NODE_ENV === 'development') { // since we added mode: 'development' in webpack.config, webpack
                                              // will replace the value of process.env.NODE_ENV for development
  const el = document.querySelector('#dev-products');

  // Assuming our container doesn't have an element with id = "dev-products"
  // if it does have the same id we have issues
  if (el) {
    mount(el);  // we are probably running in isolation
  }
}


// Context/Situation #2
// We are runninng this file in development or production through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exist
// WE DO NOT WANT to try to immediately render the app
export { mount };