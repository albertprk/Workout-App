import React, { Component } from 'react';
import SideMenu from './SideMenu';
import Header from './Header';

import { Provider } from 'react-redux';
import configureStore from '../../../store/configureStore'


const store = configureStore();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}

render(){
  return (
  <div>
  <Header />
  <br />
  <Provider store={store}><SideMenu /></Provider>
  </div>
  )
  
}

 
};

export default App;
