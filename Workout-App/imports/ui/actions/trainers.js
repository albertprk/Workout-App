import axios from 'axios';


// update the current page the user have selected (page should be 'Gym' / 'Trainers' etc)
export const updatepage = page => {
  return {
      type: "UPDATE_PAGE",
      currentpage: page
    };
};

 export const trainersErrored = (bool) => {
     return {
         type: 'TRIANERS_ERRORED',
         hasErrored: bool
     };
 };


export const isTrainersLoading = (bool) =>{
    console.log("isTrainersLoading starts in actions" )
    return{
        type: 'TRAINERS_LOADING',
        isLoading: bool
    };
};

export const trainersSuccess = (trainers) => {
    console.log("SUCCESSFUL TRAINERS");
    console.log("trainers from actions: ");
    console.log(trainers)
    return {
        type: 'TRAINERS_FETCH_SUCCESS',
        trainers: trainers
    }
}

export const trainersFetchData = (url) => {
    return (dispatch) => {
        dispatch(isTrainersLoading(true));
        console.log("fetching in trainers ...");

        axios.get(url)
            .then((response) => {
                console.log(url)
                if (!response.data){
                    throw Error(response.statusText);
                }
                console.log("dispatch starts")
                dispatch(isTrainersLoading(false));
                console.log("dispatch ends")

                console.log("trainer success starts")
                console.log(response.data)
                dispatch(trainersSuccess(response.data));
                console.log("trainer success ends")

                console.log("success in fetch data")
                console.log(response.data);
                return response.data;
            })
                .catch((err) => {
                    console.log("There is an error ouccring in fetch trainers action")
                    console.log(err);
                    dispatch(trainersErrored(true))
                });
    }
}

//add a trainer to databse, called from trainerform
export const addTrainer = (Trainer) => {
	return dispatch => {
		console.log("adding a new trainer to database!");
		console.log(Trainer);


		axios
            .post("http://localhost:9000/trainers", {
                trainer: Trainer
            })
            .then(res => {
                dispatch(addTrainerSuccess(Trainer));
            })
            .catch(err => {
                console.log("There is an error occurring in add Trainer");
            });

	}
}

//called when a Trainer is successfully posted to database, will update redux with new trainer
export const addTrainerSuccess = (Trainer) => {
    return {
        type: 'ADD_TRAINER',
        payload: Trainer
    }
};
