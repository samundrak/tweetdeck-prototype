import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import CoreContext from './contexts/CoreContext';
import TweetDeck from './core/TweetDeck';

const store = configureStore();
const core = new TweetDeck({ store });
core.init();
render(
  <Provider store={store}>
    <CoreContext.Provider value={core}>
      <App />
    </CoreContext.Provider>
  </Provider>,
  document.getElementById('root'),
);
