import { createStore, combineReducers } from 'redux'

import Products from './module/products-module'

const reducers = combineReducers({
  products: Products
});

export default function configureStore (initialState) {

  const bundle = compose(
    applyMiddleware(thunkMiddleware)
  );
  const createStoreWithMiddleware = bundle(createStore) 
  const store = createStoreWithMiddleware(reducers, initialState)

  return store
}