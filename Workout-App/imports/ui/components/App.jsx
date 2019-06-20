import React from 'react';
<<<<<<< HEAD
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
=======
import TrainerCard from './TrainerCard';
import TrainersMenu from './TrainersMenu';
import SideMenu from './SideMenu';
import Header from './Header';

const App = () => (
  <div>
    <Header />
    <br />
    <SideMenu />
>>>>>>> 55e02fba6947661ad3b2f2b7917a47d55189c8bc
  </div>
);

export default App;
