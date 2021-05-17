import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {createStore, applyMiddleware, compose} from "redux";
import rootReducers from "./reducers"
import thunk from "redux-thunk";
import {Provider} from "react-redux"
import GlobalStyle from "./globalStyles"


const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnchancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


