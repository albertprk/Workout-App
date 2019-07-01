import { combineReducers } from "redux";
import './../actions/page.js';

//TO-DO:
//simple page reducer, need to be updated later
const currentpageReducer = (currentpage = 'Gym', action) => {
  if (action.type === "UPDATE_PAGE") {
      return action.currentpage;
    }
  return currentpage;
};

const gymsDummyReducer = () => {
    return [
        {
            name: "Ron Zalko's Fitness",
            description: "Weightlifting gym and yoga studio in the heart of Kitsilano",
            spiel: "At Ron Zalko Fitness & Yoga in Vancouver, we offer the very best to meet all your health and fitness needs. From a state of the art gym facility for strength and cardio training to our spacious studio for group exercise, Ron Zalko Fitness centre has everything you need for your focused workout, get in shape and have fun doing it!",
            tags: ["Weightlifting", "Kickboxing", "Cardio", "Trainers", "Yoga"],
            address: "1807 W 1st Ave, Vancouver, BC V6J 1G5",
            hours: ["8-5", "6-10", "6-10", "6-10", "6-10", "6-8", "8-6"]
        },
        {
            name: "Ron Zalko's Fitness2",
            description: "Weightlifting gym and yoga studio in the heart of Kitsilano",
            spiel: "At Ron Zalko Fitness & Yoga in Vancouver, we offer the very best to meet all your health and fitness needs. From a state of the art gym facility for strength and cardio training to our spacious studio for group exercise, Ron Zalko Fitness centre has everything you need for your focused workout, get in shape and have fun doing it!",
            tags: ["Weightlifting", "Kickboxing", "Cardio", "Trainers", "Yoga"],
            address: "1807 W 1st Ave, Vancouver, BC V6J 1G5",
            hours: ["sun 8-5", "mon 6-10", "Tues 6-10", "wed 6-10", "thurs 6-10", "fri 6-8", "sat 8-6"]

        },
        {
            name: "Ron Zalko's Fitness3",
            description: "Weightlifting gym and yoga studio in the heart of Kitsilano",
            spiel: "At Ron Zalko Fitness & Yoga in Vancouver, we offer the very best to meet all your health and fitness needs. From a state of the art gym facility for strength and cardio training to our spacious studio for group exercise, Ron Zalko Fitness centre has everything you need for your focused workout, get in shape and have fun doing it!",
            tags: ["Weightlifting", "Kickboxing", "Cardio", "Trainers", "Yoga"],
            address: "1807 W 1st Ave, Vancouver, BC V6J 1G5",
            hours: ["6-10", "6-10", "6-10", "6-10", "6-8", "8-6", "8-5"]

        }
    ]
};

const gymsLoading = (state = false, action) => {
    if (action.type === 'GYMS_LOADING') {
        return action.isLoading;
    }
    return state;
};

const gymsErrored = (state = false, action) => {
    if (action.type === 'GYMS_ERRORED') {
        return action.hasErrored;
    }
    return state;
};

const manageGymsReducer = (gymsList = [], action) => {
    switch (action.type) {
        case 'ADD_GYM_SUCCESS':
            console.log(action.gym);
            return [...gymsList, action.gym];
        // case  'REMOVE_GYM_SUCCESS':
        //     return gymsList.filter(
        //         gym => {
        //             return gym._id !== action.payload }
        //     );
        case  'GYMS_FETCH_SUCCESS':
            console.log("success in reducer");
            console.log(action.gyms.data);
            return action.gyms.data;
        default:
            return gymsList;
    }
};

export default combineReducers({
    gymsReducer: manageGymsReducer,
    gymsLoading: gymsLoading,
    gymsErrored: gymsErrored,
    manageGyms: manageGymsReducer,
    currentpage: currentpageReducer
});
