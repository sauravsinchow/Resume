import { useEffect, useState } from "react";
import SkillFormListItem from "./SkillFormListItem";

import { generateUID } from "../utils/utils";

function SkillsForm(props){

    const [list,setList] = useState([]);
    const [skill,setSkill] = useState('');

    const skillChangeHandler = (e) => {
        setSkill(e.target.value);
    }

    const addSkillHandler = () => {
        const updatedList = [...list, {name:skill, id:generateUID()}];
        setList(updatedList);
        setSkill('');
        props.submitHandler(updatedList);
    }

    const deleteSkill = (id) => {
        const updatedList = list.filter(skill => skill.id != id);
        setList(updatedList);
        props.submitHandler(updatedList);
    }

    useEffect(()=>{
        setList(props.dataModel.skill)
    },[]);

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