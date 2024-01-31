// index.js

import React from 'react';
import { createRoot } from 'react-dom'; // Importe createRoot
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';
import App from './App';

const root = createRoot(document.getElementById('root')); // Use createRoot em vez de ReactDOM.render

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
