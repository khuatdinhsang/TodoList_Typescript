
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { allReducers } from './store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store =createStore(allReducers)
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);
 