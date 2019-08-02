import './../actions/trainerTags';

export const trainerCommentUpdateLoading = (state = false, action) => {
    console.log("trainersLoading in reducer works", action.isLoading);
    if (action.type === 'TRAINER_COMMENT_UPDATE_LOADING') {
        return action.isLoading
    }
    return state;
};

export const trainerCommentUpdateErrored = (state = false, action) => {
    if (action.type === 'TRAINER_COMMENT_UPDATE_ERRORED') {
        return action.hasErrored;
    }
    return state;
};

export const managerTrainerCommentUpdateReducer = (trainerCommentObject = [], action) => {
    switch (action.type) {
        case 'TRAINER_COMMENT_UPDATE_SUCCESS':
            console.log("trainerComment reducer");
            console.log(action.trainerComment);

            return action.trainerComment;
        default:
            return trainerCommentObject;
    }
};