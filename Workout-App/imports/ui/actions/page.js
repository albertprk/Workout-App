export const UPDATE_PAGE = 'UPDATE_PAGE';
export const ADD_GYM = 'ADD_GYM';
export const ADD_GYM_ERROR = 'ADD_GYM_ERROR';
export const GYMS_LOADING = 'GYMS_LOADING';
export const ADD_TRAINER = 'ADD_TRAINER';
export const ADD_TRAINER_ERROR = 'ADD_TRAINER_ERROR';
export const TRAINERS_LOADING = 'TRAINERS_LOADING';

/*
 *
 *  README: IF YOU'RE ADDING AN ACTION, ADD THE CONSTANT ABOVE THEN IMPORT THE CONSTANT ON THE REDUCERS PAGE
 *
 */

/*
 *  NAVIGATION ACTIONS
 */

// update the current page the user have selected (page should be 'Gym' / 'Trainers' etc)
export const updatePage = page => {
  return {
      type: UPDATE_PAGE,
      currentPage: page
    };
};

/*
 *  GYM ACTIONS
 */

export const addGym = gym => {
    return {
        type: ADD_GYM,
        gym: gym
    };
};

export const addGymError = bool => {
    return {
        type: ADD_GYM_ERROR,
        hasErrored: bool
    };
};

export const gymsLoading = bool => {
    return {
        type: GYMS_LOADING,
        isLoading: bool
    };
};

/*
 *  TRAINER ACTIONS
 */

export const addTrainer = gym => {
    return {
        type: ADD_TRAINER,
        gym: gym
    };
};

export const addTrainerError = bool => {
    return {
        type: ADD_TRAINER_ERROR,
        hasErrored: bool
    };
};

export const trainersLoading = bool => {
    return {
        type: TRAINERS_LOADING,
        isLoading: bool
    };
};