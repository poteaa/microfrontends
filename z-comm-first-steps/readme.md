# Important considerations when designing microfrontends

- Zero coupling between child projects
- No importing of functions/objects/classes/etc
- No shared state
- Shared libraries through MF is ok

- Near-zero coupling between container and child apps
- Container shoudn't assume that a child is using a particular frameworkd
- Any necessary communication dond with callbacks or simple events

- CSS from one project shouldn't affect another

- Version control (monorepo vs separate) shouldn't have any impact on the overall project
- Some people want to use monorepos
- Some people want to keen everything in a separate repo

- Container should be able to decide to always use the latest version of a microfronend or
  specify a specific version
  1. Container will always use the latest verion of a child app (doesn't require redeploy of container)
  2. Container can specify exactly what version of a child it wants to us (requires a redeploy to change)