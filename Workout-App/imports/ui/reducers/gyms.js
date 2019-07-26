import '../actions/page.js';
import '../actions/gyms.js';

export const gymsLoading = (state = false, action) => {
    console.log("gymsLoading in reducer works", action.isLoading);

    if (action.type === 'GYMS_LOADING') {
        return action.isLoading;
    }
    return state;
};

export const gymsErrored = (state = false, action) => {
    if (action.type === 'GYMS_ERRORED') {
        return action.hasErrored;
    }
    return state;
};


export const manageGymsReducer = (gymsList = [], action) => {
    switch (action.type) {
        case 'ADD_GYM_SUCCESS':
            console.log(action.gym);
            return [...gymsList, action.gym];
        case  'GYMS_FETCH_SUCCESS':
            console.log("success in reducer");
            console.log(action.gyms.data);
            return action.gyms.data;
        default:
            console.log("gym reducer");
            return gymsList;
    }
};
