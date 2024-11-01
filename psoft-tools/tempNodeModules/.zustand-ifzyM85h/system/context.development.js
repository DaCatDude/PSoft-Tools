System.register(['react', 'zustand/traditional'], (function (exports) {
  'use strict';
  var ReactExports, useStoreWithEqualityFn;
  return {
    setters: [function (module) {
      ReactExports = module.default;
    }, function (module) {
      useStoreWithEqualityFn = module.useStoreWithEqualityFn;
    }],
    execute: (function () {

      exports("default", createContext);

      const {
        createElement,
        createContext: reactCreateContext,
        useContext,
        useMemo,
        useRef
      } = ReactExports;
      function createContext() {
        {
          console.warn(
            "[DEPRECATED] `context` will be removed in a future version. Instead use `import { createStore, useStore } from 'zustand'`. See: https://github.com/pmndrs/zustand/discussions/1180."
          );
        }
        const ZustandContext = reactCreateContext(void 0);
        const Provider = ({
          createStore,
          children
        }) => {
          const storeRef = useRef();
          if (!storeRef.current) {
            storeRef.current = createStore();
          }
          return createElement(
            ZustandContext.Provider,
            { value: storeRef.current },
            children
          );
        };
        const useContextStore = (selector, equalityFn) => {
          const store = useContext(ZustandContext);
          if (!store) {
            throw new Error(
              "Seems like you have not used zustand provider as an ancestor."
            );
          }
          return useStoreWithEqualityFn(
            store,
            selector,
            equalityFn
          );
        };
        const useStoreApi = () => {
          const store = useContext(ZustandContext);
          if (!store) {
            throw new Error(
              "Seems like you have not used zustand provider as an ancestor."
            );
          }
          return useMemo(() => ({ ...store }), [store]);
        };
        return {
          Provider,
          useStore: useContextStore,
          useStoreApi
        };
      }

    })
  };
}));
