import { ADD_AWARD, DELETE_AWARD } from "./awardsConstants"

const initialState = {
    list: []
}

const awardsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_AWARD:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case DELETE_AWARD:
            const updatedList = state.list.filter(edu => edu.id !== action.payload)
            return {
                ...state,
                list: updatedList
            }
        default:
            return state
    }
}

export default awardsReducer;