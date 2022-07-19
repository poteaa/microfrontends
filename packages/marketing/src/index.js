// Load bootstrap async so we avoid this error: "Shared module is not available for eager consumption"
// when sharing dependencies.

import('./bootstrap');