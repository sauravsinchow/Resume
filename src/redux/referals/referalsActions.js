import { ADD_REF, DELETE_REF } from "./referalsConstants"

export const addRefAction = (payload) => {
    return {
        type: ADD_REF,
        payload
    }
}

export const deleteRefAction = (payload) => {
    return {
        type: DELETE_REF,
        payload
    }
}