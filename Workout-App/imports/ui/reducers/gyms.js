import '../actions/page.js';
import '../actions/gyms.js';

//TO-DO:
//simple page reducer, need to be updated later
export const currentpageReducer = (currentpage = "" , action) => {
  if (action.type === "UPDATE_PAGE") {
      return action.currentpage;
    }
  return currentpage;
};

export const gymsDummyReducer = () => {
    return [
        {
            name: "Ron Zalko's Fitness",
            description: "Weightlifting gym and yoga studio in the heart of Kitsilano",
            spiel: "At Ron Zalko Fitness & Yoga in Vancouver, we offer the very best to meet all your health and fitness needs. From a state of the art gym facility for strength and cardio training to our spacious studio for group exercise, Ron Zalko Fitness centre has everything you need for your focused workout, get in shape and have fun doing it!",
            tags: ["Weightlifting", "Kickboxing", "Cardio", "Trainers", "Yoga"],
            address: "1807 W 1st Ave, Vancouver, BC V6J 1G5",
            hours: ["8-5", "6-10", "6-10", "6-10", "6-10", "6-8", "8-6"]
        }
    ]
};


export const gymsLoading = (state = false, action) => {
    console.log("gymsLoading in reducer works", action.isLoading);

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
            console.log(action.gym);
            return [...gymsList, action.gym];
        case  'GYMS_FETCH_SUCCESS':
            console.log("success in reducer");
            console.log(action.gyms.data);
            return action.gyms.data;
        default:
            console.log("gym reducer");
            return gymsList;
    }
};
