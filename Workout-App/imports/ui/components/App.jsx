import React from 'react';
import SideMenu from './SideMenu';
import Header from './Header';

import { Provider } from 'react-redux';
import currentpageReducer from './../reducers/page.js'
import { createStore } from 'redux';

const store = createStore(currentpageReducer);

const App = () => (
  <div>
      <Header />
      <br />
      <Provider store={store}><SideMenu /></Provider>
  </div>
);

export default App;
