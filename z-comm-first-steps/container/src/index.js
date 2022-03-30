// index.js generates the main.js
// Let webpack know that it has to fetch some aditional js before executing the bootstrap file
// so at the time boostrap is executed all the dependencies needed have been loaded

import('./bootstrap'); // this function sintax allows to load bootstrap async so webpack has the ability to
// fetch some aditional js before executing the bootstrap file so at the time boostrap is executed all the
// dependencies needed have been loaded