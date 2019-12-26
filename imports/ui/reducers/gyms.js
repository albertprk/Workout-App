import '../actions/page.js';
import '../actions/gyms.js';

export const gymsLoading = (state = false, action) => {
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
            return [...gymsList, action.gym];
        case  'GYMS_FETCH_SUCCESS':
            return action.gyms.data;
        default:
            return gymsList;
    }
};

export const gymSearchNameReducer = (gymSearchName = "", action)=> {
    if (action.type === 'GYM_SEARCH_NAME') {
        return action.gymSearchName;
    }
    return gymSearchName;
};
