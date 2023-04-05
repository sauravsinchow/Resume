import { useCallback, useState } from "react";
import SkillFormListItem from "./components/SkillFormListItem";

import { generateUID } from "../../../../utils/utils";
import { useDispatch, useSelector } from "react-redux";

import { addSkill, deleteSkillAction } from '../../../../redux/skills/skillsActions'

const createNewSkill = (skill) => {
    return {
        id: generateUID(),
        name:skill
    }
}

function SkillsForm(){

    const dispatch = useDispatch();
    const skillsData = useSelector(state => state.skills.list);

    const [skill,setSkill] = useState('');

    const skillChangeHandler = (e) => {
        setSkill(e.target.value);
    }

    const addSkillHandler = useCallback( () => {
        const newSkill = createNewSkill(skill);
        dispatch(addSkill(newSkill));
        setSkill('');
    } , [dispatch, skill] );

    const deleteSkill = useCallback( (id) => {
        dispatch(deleteSkillAction(id));
    } , [dispatch] )


    return (
        <>
            <input type="text" id="skill-name" placeholder="Skill" value={skill} onInput={skillChangeHandler} />
            <input type="button" value="Add" id="skill-btn" onClick={addSkillHandler} />

            <ul>
                {
                    skillsData.map(skill => <SkillFormListItem key={skill.id} skill={skill} deleteHandler={deleteSkill} />)
                }
            </ul>
        </>
    )
}

export default SkillsForm;