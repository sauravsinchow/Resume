import { ADD_EXP, DELETE_EXP, EDIT_EXP } from './expConstants'

export const addExpAction = (payload) => {
    return {
        type: ADD_EXP,
        payload
    }
}

export const deleteExpAction = (payload) => {
    return {
        type: DELETE_EXP,
        payload
    }
}

export const editExpAction = (payload) => {
    return {
        type: EDIT_EXP,
        payload
    }
}