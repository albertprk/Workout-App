import axios from 'axios';
// import {isTrainersLoading, trainersErrored, trainersSuccess} from "./trainers";


export const trainersTagsErrored = (bool) => {
    return {
        type: 'TRIANERS_TAGS_ERRORED',
        hasErrored: bool
    };
};


export const isTrainerTagsLoading = (bool) => {
    console.log("isTrainersLoading starts in actions");
    return {
        type: 'TRAINERS_TAGS_LOADING',
        isLoading: bool
    };
};

export const trainersTagsSuccess = (trainersTags) => {
    console.log("trainersTags");
    console.log(trainersTags);
    return {
        type: 'TRAINERS_TAGS_FETCH_SUCCESS',
        trainersTags: trainersTags
    }
};


export const trainerTagsFetchData = (url) => {
    return (dispatch) => {
        dispatch(isTrainerTagsLoading(true));

        axios.get(url)
            .then((response) => {
                if (!response.data) {
                    throw Error(response.statusText);
                }
                dispatch(isTrainerTagsLoading(false));

                console.log("trainerTagsFetchData");
                console.log(response.data);
                dispatch(trainersTagsSuccess(response.data));
                return response.data;
            })
            .catch((err) => {
                dispatch(trainersTagsErrored(true))
            });
    }
};