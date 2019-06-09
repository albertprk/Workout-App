import { combineReducers } from "redux";

//TO-DO:
//simple page reducer, need to be updated later
const currentpageReducer = (currentpage = 'gym', action) => {
  if (action.type === "UPDATE_PAGE") {
      return action.payload;
    }
    return currentpage;
};

export default combineReducers({
    currentpage: currentpageReducer
});
