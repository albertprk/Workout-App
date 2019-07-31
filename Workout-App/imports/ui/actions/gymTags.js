import axios from 'axios';


export const gymsTagsErrored = (bool) => {
    return {
        type: 'gyms_TAGS_ERRORED',
        hasErrored: bool
    };
};


export const isGymTagsLoading = (bool) => {
    console.log("isGymsLoading starts in actions");
    return {
        type: 'GYMS_TAGS_LOADING',
        isLoading: bool
    };
};

export const gymsTagsSuccess = (gymsTags) => {
    console.log("gymsTags");
    console.log(gymsTags);
    return {
        type: 'GYMS_TAGS_FETCH_SUCCESS',
        gymsTags: gymsTags
    }
};


export const gymTagsFetchData = (url) => {
    return (dispatch) => {
        dispatch(gymsTagsErrored(true));

        axios.get(url)
            .then((response) => {
                if (!response.data) {
                    throw Error(response.statusText);
                }
                dispatch(isGymTagsLoading(false));

                console.log("gymTagsFetchData");
                console.log(response.data);
                dispatch(gymsTagsSuccess(response.data));
                return response.data;
            })
            .catch((err) => {
                dispatch(gymsTagsErrored(true))
            });
    }
};