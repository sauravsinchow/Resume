import { useCallback, useEffect, useState } from "react";
import SkillFormListItem from "./components/SkillFormListItem";

import { generateUID } from "../../../../utils/utils";

const createNewSkill = (skill) => {
    return {
        id: generateUID(),
        name:skill
    }
}

function SkillsForm(props){

    const {
        submitHandler,
        skill: skillProps,
        ...restProps
    } = props;

    const [list,setList] = useState([]);
    const [skill,setSkill] = useState('');

    const skillChangeHandler = (e) => {
        setSkill(e.target.value);
    }

    const addSkillHandler = useCallback( () => {
        const newSkill = createNewSkill(skill);
        const updatedList = [...list, newSkill];
        setList(updatedList);
        setSkill('');
        submitHandler(updatedList);
    } , [submitHandler, skill, list] );

    const deleteSkill = useCallback( (id) => {
        const updatedList = list.filter(skill => skill.id !== id);
        setList(updatedList);
        submitHandler(updatedList);
    } , [submitHandler, list] )

    useEffect(()=>{
        setList(skillProps)
    },[skillProps]);

    return (
        <>
            <input type="text" id="skill-name" placeholder="Skill" value={skill} onInput={skillChangeHandler} />
            <input type="button" value="Add" id="skill-btn" onClick={addSkillHandler} />

            <ul>
                {
                    list.map(skill => <SkillFormListItem key={skill.id} skill={skill} deleteHandler={deleteSkill} />)
                }
            </ul>
        </>
    )
}

export default SkillsForm;