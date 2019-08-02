import axios from 'axios';

export const trainerCommentUpdateErrored = (bool) => {
    return {
        type: 'TRAINER_COMMENT_UPDATE_ERRORED',
        hasErrored: bool
    };
};


export const isTrainerCommentUpdateLoading = (bool) => {
    console.log("isTrainerCommentUpdateLoading starts in actions");
    return {
        type: 'TRAINER_COMMENT_UPDATE_LOADING',
        isLoading: bool
    };
};

export const trainerCommentUpdateSuccess = (trainerComment) => {
    console.log("trainerComment");
    console.log(trainerComment);
    return {
        type: 'TRAINER_COMMENT_UPDATE_SUCCESS',
        trainerComment: trainerComment
    }
};


export const trainerCommentUpdate = (comment, id) => {
    return (dispatch) => {
        dispatch(isTrainerCommentUpdateLoading(true));

        console.log("comment and id");
        console.log(comment);
        console.log(id);


        axios
            // Danger!!! Hard Code!!!
            .put("http://localhost:9000/trainers/updateOneTrainerComment", {
                comment: comment,
                id: id
            })
            .then(res => {
                dispatch(trainerCommentUpdateSuccess(comment));
                console.log(res.status);
                dispatch(isTrainerCommentUpdateLoading(false));
            })
            .catch(err => {
                console.log("There is an error occurring in add Trainer");
            });

    }
};