import './../actions/gymTags';

export const gymsTagsLoading = (state = false, action) => {
    console.log("gymsLoading in reducer works", action.isLoading);
    if (action.type === 'GYMS_TAGS_LOADING') {
        return action.isLoading
    }
    return state;
};

export const gymsTagsErrored = (state = false, action) => {
    if (action.type === 'GYMS_TAGS_ERRORED') {
        return action.hasErrored;
    }
    return state;
};

export const managerGymsTagsReducer = (gymsTagsList = [], action) => {
    switch (action.type) {
        case 'GYMS_TAGS_FETCH_SUCCESS':
            console.log("Gymtags reducer");
            console.log(action.gymsTags.data);
            var gymsTagsSorted = action.gymsTags.data;
            gymsTagsSorted.sort();
            return gymsTagsSorted;
        default:
            return gymsTagsList;
    }
};