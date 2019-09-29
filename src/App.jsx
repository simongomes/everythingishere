import React, { Component } from 'react';
import SiteRoot from './components/SiteRoot';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SiteRoot />
      </Provider>
    );
  }
}

export default App;
