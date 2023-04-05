import { ADD_IMG } from "./imageConstants";

const initialState = {
    url: ''
}

const imageReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_IMG:
            return {
                url: action.payload
            }
        default:
            return state
    }
}

export default imageReducer;