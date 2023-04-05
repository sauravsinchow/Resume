import { SUBMIT_INTRO } from "./introConstants";

const initialState = {
    name: 'Name',
    role: 'Role',
    desc: 'Desc'
}

const introReducer = (state = initialState, action) => {
    switch(action.type){
        case SUBMIT_INTRO:
            return {
                ...state,
                name: action.payload.name,
                role: action.payload.role,
                desc: action.payload.desc,
            }
        default:
            return state
    }
}

export default introReducer;