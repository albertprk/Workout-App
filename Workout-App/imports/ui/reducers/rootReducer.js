import { combineReducers } from "redux";
import {currentpageReducer,gymsDummyReducer,gymsLoading,gymsErrored,manageGymsReducer} from "./gyms";
import {trainersLoading,trainersErrored,managerTrainersReducer,trainerInfoLastName} from "./trainers"

const rootReducer = combineReducers({

    gymsReducer: manageGymsReducer,
    gymsLoading: gymsLoading,
    gymsErrored: gymsErrored,
    manageGyms: manageGymsReducer,
    currentpage: currentpageReducer,

    trainersReducer: managerTrainersReducer,
    trainersLoading: trainersLoading,
    trainersErrored: trainersErrored,
    lastName: trainerInfoLastName,
    
});

export default rootReducer;
