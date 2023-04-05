import { ADD_IMG } from "./imageConstants"

export const addImgAction = (payload) => {
    return {
        type: ADD_IMG,
        payload
    }
}