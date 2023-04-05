import { ADD_SKILL, DELETE_SKILL } from "./skillsConstants"

const initialState = {
    list: []
}

const skillsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_SKILL:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case DELETE_SKILL:
            const updatedList = state.list.filter(skill => skill.id !== action.payload)
            return {
                ...state,
                list: updatedList
            }
        default:
            return state
    }
}

export default skillsReducer;