import axios from 'axios';


export const gymsTagsErrored = (bool) => {
    return {
        type: 'gyms_TAGS_ERRORED',
        hasErrored: bool
    };
};


export const isGymTagsLoading = (bool) => {
    return {
        type: 'GYMS_TAGS_LOADING',
        isLoading: bool
    };
};

export const gymsTagsSuccess = (gymsTags) => {
    return {
        type: 'GYMS_TAGS_FETCH_SUCCESS',
        gymsTags: gymsTags
    }
};


export const gymTagsFetchData = (url) => {
    return (dispatch) => {
        dispatch(isGymTagsLoading(true));

        axios.get(url)
            .then((response) => {
                if (!response.data) {
                    throw Error(response.statusText);
                }
                dispatch(isGymTagsLoading(false));

                dispatch(gymsTagsSuccess(response.data));
                return response.data;
            })
            .catch((err) => {
                dispatch(gymsTagsErrored(true))
            });
    }
};