import { SUBMIT_INTRO } from "./introConstants"

export const submitIntro = (payload) => {
    return {
        type: SUBMIT_INTRO,
        payload
    }
};