import {combineReducers} from "redux";
import {gymsLoading, gymsErrored, manageGymsReducer, gymSearchName} from "./gyms";
import {trainersLoading, trainersErrored, managerTrainersReducer, trainerInfoObjectId} from "./trainers"
import {trainersTagsLoading,trainersTagsErrored,managerTrainersTagsReducer} from"./trainerTags"
import {gymsTagsLoading, gymsTagsErrored, managerGymsTagsReducer} from "./gymTags"

const rootReducer = combineReducers({

    gymsReducer: manageGymsReducer,
    gymsLoading: gymsLoading,
    gymsErrored: gymsErrored,
    manageGyms: manageGymsReducer,
    gymSearchName: gymSearchName,

    trainersReducer: managerTrainersReducer,
    trainersLoading: trainersLoading,
    trainersErrored: trainersErrored,
    trainerId: trainerInfoObjectId,

    trainersTagsLoading: trainersTagsLoading,
    trainersTagsErrored: trainersTagsErrored,
    trainersTagsReducer: managerTrainersTagsReducer,

    gymsTagsLoading: gymsTagsLoading,
    gymsTagsErrored: gymsTagsErrored,
    gymsTagsReducer: managerGymsTagsReducer,

});

export default rootReducer;
