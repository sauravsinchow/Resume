function ExperienceFormListItem(props){

    const deleteHandler = () => {
        props.deleteHandler(props.exp.id);
    }

    const editHandler = () => {
        props.editHandler(props.exp)
    }

    return (
        <div id={props.exp.id}>
            <p>{props.exp.year}</p>
            <h3>{props.exp.company}</h3>
            <p>{props.exp.desc}</p>
            <input type="button" value="X" onClick={deleteHandler} />
            <input type="button" value="Edit" onClick={editHandler} />
        </div>
    )
}

export default ExperienceFormListItem;