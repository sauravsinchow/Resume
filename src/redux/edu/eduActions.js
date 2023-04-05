import { ADD_EDU, DELETE_EDU, EDIT_EDU } from './eduConstants'

export const addEduAction = (payload) => {
    return {
        type: ADD_EDU,
        payload
    }
}

export const deleteEduAction = (payload) => {
    return {
        type: DELETE_EDU,
        payload
    }
}

export const editEduAction = (payload) => {
    return {
        type: EDIT_EDU,
        payload
    }
}