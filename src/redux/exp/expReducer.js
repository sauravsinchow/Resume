import { ADD_EXP, DELETE_EXP, EDIT_EXP } from "./expConstants";

const initialState = {
    list: []
}

const expReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_EXP:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case DELETE_EXP: {
            const updatedList = state.list.filter(exp => exp.id !== action.payload)
            return {
                ...state,
                list: updatedList
            }
        }
        case EDIT_EXP: {
            const updatedList = state.list.map(exp => {
                if(exp.id === action.payload.id){
                    return action.payload;
                }
                return exp;
            })
            return {
                ...state,
                list: updatedList
            }
        }
        default:
            return state
    }
}

export default expReducer;