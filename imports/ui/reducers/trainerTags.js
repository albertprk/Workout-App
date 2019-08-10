import './../actions/trainerTags';

export const trainersTagsLoading = (state = false, action) => {
    if (action.type === 'TRAINERS_TAGS_LOADING') {
        return action.isLoading
    }
    return state;
};

export const trainersTagsErrored = (state = false, action) => {
    if (action.type === 'TRAINERS_TAGS_ERRORED') {
        return action.hasErrored;
    }
    return state;
};

export const managerTrainersTagsReducer = (trainersTagsList = [], action) => {
    switch (action.type) {
        case 'TRAINERS_TAGS_FETCH_SUCCESS':
            var trainersTagsSorted = action.trainersTags.data;
            trainersTagsSorted.sort();
            return trainersTagsSorted;
        default:
            return trainersTagsList;
    }
};
