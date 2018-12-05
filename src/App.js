import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import Home from './pages/Home';

import AppLayout from './containers/AppLayout';
import configureStore from './store/configureStore';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <AppLayout>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </AppLayout>
        </Router>
      </Provider>
    );
  }
}
export default App;
