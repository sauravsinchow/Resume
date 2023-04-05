import { ADD_SKILL, DELETE_SKILL } from "./skillsConstants"

export const addSkill = (payload) => {
    return {
        type: ADD_SKILL,
        payload
    }
}

export const deleteSkillAction = (payload) => {
    return {
        type: DELETE_SKILL,
        payload
    }
}