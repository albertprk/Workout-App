import {combineReducers} from "redux";
import {gymsLoading, gymsErrored, manageGymsReducer} from "./gyms";
import {trainersLoading, trainersErrored, managerTrainersReducer, trainerInfoObjectId} from "./trainers"

const rootReducer = combineReducers({

    gymsReducer: manageGymsReducer,
    gymsLoading: gymsLoading,
    gymsErrored: gymsErrored,
    manageGyms: manageGymsReducer,

    trainersReducer: managerTrainersReducer,
    trainersLoading: trainersLoading,
    trainersErrored: trainersErrored,
    trainerId: trainerInfoObjectId,

});

export default rootReducer;
