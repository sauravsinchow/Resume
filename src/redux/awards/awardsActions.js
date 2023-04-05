import { ADD_AWARD, DELETE_AWARD } from "./awardsConstants"

export const addAwardAction = (payload) => {
    return {
        type: ADD_AWARD,
        payload
    }
}

export const deleteAwardAction = (payload) => {
    return {
        type: DELETE_AWARD,
        payload
    }
}