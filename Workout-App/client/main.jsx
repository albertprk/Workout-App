import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/components/App'
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "/imports/ui/reducers/page";

Meteor.startup(() => {
  render(<Provider store={createStore(reducers)}><App /></Provider>, document.getElementById('react-target'));
});
