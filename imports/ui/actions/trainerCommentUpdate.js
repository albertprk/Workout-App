import axios from 'axios';

export const trainerCommentUpdateErrored = (bool) => {
    return {
        type: 'TRAINER_COMMENT_UPDATE_ERRORED',
        hasErrored: bool
    };
};


export const isTrainerCommentUpdateLoading = (bool) => {
    return {
        type: 'TRAINER_COMMENT_UPDATE_LOADING',
        isLoading: bool
    };
};

export const trainerCommentUpdateSuccess = (trainerComment) => {
    return {
        type: 'TRAINER_COMMENT_UPDATE_SUCCESS',
        trainerComment: trainerComment
    }
};


export const trainerCommentUpdate = (comment, id) => {
    return (dispatch) => {
        dispatch(isTrainerCommentUpdateLoading(true));

        axios
            // Danger!!! Hard Code!!!
            .put("http://localhost:9000/trainers/updateOneTrainerComment", {
                comment: comment,
                id: id
            })
            .then(res => {
                dispatch(trainerCommentUpdateSuccess(comment));
                dispatch(isTrainerCommentUpdateLoading(false));
            })
            .catch(err => {
                console.log("There is an error occurring in add Trainer");
                console.log(err);
            });

    }
};