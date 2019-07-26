import { combineReducers } from "redux";
import {currentpageReducer,gymsLoading,gymsErrored,manageGymsReducer} from "./gyms";
import {trainersLoading,trainersErrored,managerTrainersReducer,trainerInfoObjectId} from "./trainers"

const rootReducer = combineReducers({

    gymsReducer: manageGymsReducer,
    gymsLoading: gymsLoading,
    gymsErrored: gymsErrored,
    manageGyms: manageGymsReducer,
    currentpage: currentpageReducer,

    trainersReducer: managerTrainersReducer,
    trainersLoading: trainersLoading,
    trainersErrored: trainersErrored,
    trainerId: trainerInfoObjectId,
    
});

export default rootReducer;
