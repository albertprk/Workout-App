import { combineReducers } from "redux";
import '../actions/page.js';
import { UPDATE_PAGE, ADD_GYM, ADD_GYM_ERROR, GYMS_LOADING, REMOVE_GYM,
         ADD_TRAINER, ADD_TRAINER_ERROR, TRAINERS_LOADING} from '../actions/page.js'
// IMPORT CONSTANTS FROM ACTIONS PAGE^^

//TO-DO:
//simple page reducer, need to be updated later
const currentPageReducer = (currentPage = 'Gym', action) => {
  if (action.type === UPDATE_PAGE) {
      return action.currentPage;
    }
  return currentPage;
};

const gymsReducer = () => {
    return [
        {
            name: "Ron Zalko's Fitness",
            description: "Weightlifting gym and yoga studio in the heart of Kitsilano",
            spiel: "At Ron Zalko Fitness & Yoga in Vancouver, we offer the very best to meet all your health and fitness needs. From a state of the art gym facility for strength and cardio training to our spacious studio for group exercise, Ron Zalko Fitness centre has everything you need for your focused workout, get in shape and have fun doing it!",
            tags: ["Weightlifting", "Kickboxing", "Cardio", "Trainers", "Yoga"],
            address: "1807 W 1st Ave, Vancouver, BC V6J 1G5",
            hours: ["6-10", "6-10", "6-10", "6-10", "6-8", "8-6", "8-5"]
        },
        {
            name: "Ron Zalko's Fitness2",
            description: "Weightlifting gym and yoga studio in the heart of Kitsilano",
            spiel: "At Ron Zalko Fitness & Yoga in Vancouver, we offer the very best to meet all your health and fitness needs. From a state of the art gym facility for strength and cardio training to our spacious studio for group exercise, Ron Zalko Fitness centre has everything you need for your focused workout, get in shape and have fun doing it!",
            tags: ["Weightlifting", "Kickboxing", "Cardio", "Trainers", "Yoga"],
            address: "1807 W 1st Ave, Vancouver, BC V6J 1G5",
            hours: ["mon 6-10", "Tues 6-10", "wed 6-10", "thurs 6-10", "fri 6-8", "sat 8-6", "sun 8-5"]

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

const manageGyms = (gymList = gymsReducer(), action) => {
    if (action.type === ADD_GYM) {
        return [...gymList,
            {
                name: "Ron Zalko's Fitness Added",
                description: "Weightlifting gym and yoga studio in the heart of Kitsilano",
                spiel: "At Ron Zalko Fitness & Yoga in Vancouver, we offer the very best to meet all your health and fitness needs. From a state of the art gym facility for strength and cardio training to our spacious studio for group exercise, Ron Zalko Fitness centre has everything you need for your focused workout, get in shape and have fun doing it!",
                tags: ["Weightlifting", "Kickboxing", "Cardio", "Trainers", "Yoga"],
                address: "1807 W 1st Ave, Vancouver, BC V6J 1G5",
                hours: ["6-10", "6-10", "6-10", "6-10", "6-8", "8-6", "8-5"]
            }
        ]
    } else if (action.type === REMOVE_GYM) {
        return gymList.filter(
            gym => { return gym.name !== action.payload }
        )
    } else {
        return gymList;
    }
};

export default combineReducers({
    manageGyms: manageGyms,
    currentPage: currentPageReducer,
    gymsReducer: gymsReducer
});
