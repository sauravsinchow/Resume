import { combineReducers } from "@reduxjs/toolkit";
import awardsReducer from "./awards/awardsReducer";
import eduReducer from "./edu/eduReducer";
import expReducer from "./exp/expReducer";
import imageReducer from "./image/imageReducer";
import introReducer from "./intro/introReducer";
import referalsReducer from "./referals/referalsReducer";
import skillsReducer from "./skills/skillsReducer";

const rootReducer = combineReducers({
    intro: introReducer,
    skills: skillsReducer,
    edu: eduReducer,
    awards: awardsReducer,
    exp: expReducer,
    referals: referalsReducer,
    img: imageReducer
})

export default rootReducer;