# react-scaffold-dashboard

POC for a react scaffold of dashboard-esque projects, with modules organized in a plug-and-play manner.

[Online Demo](https://roneyrao.github.io/react-scaffold-dashboard)

## Main features

### Ajax layer abstraction

This layer is an encapsulation of `fetch` method, cooperating with `react-thunk`. It's abstracted into three levels.

1. The lowest `Ajax` class, corresponds to different categories of data formats, such as `restful` api with predefined data structure, e.g. what fields to indicating success/failure, where data is stored. Then it defines the related request configurations, functions to parse received data and send them out.

2. The second one, named `Requester`, it corresponds to different API, e.g. url. So what it includes are api path, specific data filtering method.

3. The last level, `Fetcher` obviously represents each request call. Mainly it's responsible to parse parameters.


### Business modularization

A typical dashboard has a navigation panel in the left, which includes a treeish menu collection. That would be good if the file structure is the same with it. To achieve that several helper methods are supplied, along with common menu & menu item components. With them, it's quite easy to develop a module without worring about matching of menus and routes, retrieving its own slice of data from the vast redux store.

The root of the tree is `modules` folder, its file structure looks like this:

```
-- modules
  -- Module/Menu
    -- index.js
    -- registered.js
    -- SumModule/SumMenu
      -- index.js
      -- registered.js
      -- Sub-SumMenu
        ... (any intermediate submenu)
          -- Module
            -- Navs
            -- Routes
            -- reducers
          -- Module
          ...

      -- Sub-SumMenu

    -- SumMenu

  -- Menu
```

#### To connect those modules into a tree:

1. In each module, 

```
  export { Navs, Routes, reducers } from '...';

```

2. In each upper menu folder, include two files

  - registered.js: export sub-modules being wished to be included.

    ```
      export * as moduleA from './moduleA';
      export * as moduleB from './moduleB';
      ...
    ```
  - index.js: export registered modules.

    ```
      import * as modules from './registered';
      const { reducers, Navs, Routes } = helper.exportModules(modules, module.exports);
      export { reducers, Navs, Routes };
    ```

That's it, everything else is left to framework.

#### To retrieve a module's own data
```
  -- Module
    -- reducers
      -- reducer.js
```

in reducer.js:

```
  import { getState } from '../';

  function mapStateToProps(state) {
    const moduleA = getState(state);
  }
```

`getState` is injected by framework.
