// Load bootstrap asynchronouslu so we avoid this error: "Shared module is not 
// available for eager consumption" when sharing dependencies. It gives webpack
// the oportunity to go and fetch some code that is rquired to execute the index

import('./bootstrap');