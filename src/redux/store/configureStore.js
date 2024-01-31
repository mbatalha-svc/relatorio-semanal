// configureStore.js

import { configureStore } from '@reduxjs/toolkit'; // Importe configureStore
import jwtReducer from '../reducers/jwtReducer';

// Crie o Store Redux com os Reducers combinados usando configureStore
const store = configureStore({
  reducer: {
    jwt: jwtReducer,
  },
});

export default store;