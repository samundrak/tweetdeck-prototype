import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'auto-bind';
import renderIf from 'render-if';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { changePreferenceDrawerStatus } from './store/actions';
import Home from './pages/Home';
import CoreContext from './contexts/CoreContext';
import './App.css';

import AppLayout from './containers/AppLayout';

class App extends Component {
  constructor(props) {
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
        {renderIf(preferences)(
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
          </AppLayout>,
        )}
      </Router>
    );
  }
}
App.contextType = CoreContext;
const mapStateToProps = state => ({
  app: state.app,
});
App.propTypes = {
  app: PropTypes.objectOf({
    isPreferencesDrawerOpen: PropTypes.bool.isRequired,
    preferences: PropTypes.object.isRequired,
  }).isRequired,
  changePreferenceDrawerStatus: PropTypes.func.isRequired,
};
export default connect(
  mapStateToProps,
  { changePreferenceDrawerStatus },
)(App);
