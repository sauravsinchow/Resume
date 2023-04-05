import { ADD_EDU, DELETE_EDU, EDIT_EDU } from "./eduConstants";

const initialState = {
    list: []
}

const eduReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_EDU:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case DELETE_EDU: {
            const updatedList = state.list.filter(edu => edu.id !== action.payload)
            return {
                ...state,
                list: updatedList
            }
        }
        case EDIT_EDU: {
            const updatedList = state.list.map(edu => {
                if(edu.id === action.payload.id){
                    return action.payload;
                }
                return edu;
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

export default eduReducer;