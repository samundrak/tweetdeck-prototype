import React, { Component } from 'react';
import autobind from 'auto-bind';
import renderIf from 'render-if';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import { changePreferenceDrawerStatus } from './store/actions';
import Home from './pages/Home';
import CoreContext from './contexts/CoreContext';

import AppLayout from './containers/AppLayout';

class App extends Component {
  constructor(props, context) {
    super(props);
    autobind(this);
    this.state = {
      isPreferencesVisible: false,
    };
  }
  componentDidMount() {
    this.context.loadPreservedPreferences();
  }
  handleMenuClick(event) {
    console.log(event);
    if (event.key === 'preferences') {
      this.changePreferenceDrawerStatus(true);
    }
  }
  changePreferenceDrawerStatus(status) {
    this.props.changePreferenceDrawerStatus(status);
  }
  handlePreferenceClose() {
    this.changePreferenceDrawerStatus(false);
  }
  render() {
    const { isPreferencesDrawerOpen, preferences } = this.props.app;
    return (
      <Router>
        <AppLayout
          preferences={preferences}
          handleMenuClick={this.handleMenuClick}
          isPreferencesVisible={isPreferencesDrawerOpen}
          handlePreferenceClose={this.handlePreferenceClose}
        >
          {renderIf(preferences)(
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>,
          )}
        </AppLayout>
      </Router>
    );
  }
}
App.contextType = CoreContext;
const mapStateToProps = state => ({
  app: state.app,
});
export default connect(
  mapStateToProps,
  { changePreferenceDrawerStatus },
)(App);
