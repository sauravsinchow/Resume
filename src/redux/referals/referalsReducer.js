import { ADD_REF, DELETE_REF } from "./referalsConstants"

const initialState = {
    list: []
}

const referalsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_REF:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case DELETE_REF:
            const updatedList = state.list.filter(ref => ref.id !== action.payload)
            return {
                ...state,
                list: updatedList
            }
        default:
            return state
    }
}

export default referalsReducer;