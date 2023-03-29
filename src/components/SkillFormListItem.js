function SkillFormListItem(props){

    const deleteHandler = () => {
        props.deleteHandler(props.skill.id);
    }

    return (
        <li>
            {props.skill.name}
            <input id={props.skill.id} value="X" type="button" onClick={deleteHandler} />
        </li>
    )
}

export default SkillFormListItem;