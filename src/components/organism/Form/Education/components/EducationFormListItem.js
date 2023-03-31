function EducationFormListItem(props){

    const deleteHandler = () => {
        props.deleteHandler(props.edu.id);
    }

    const editHandler = () => {
        props.editHandler(props.edu);
    }

    return (
        <div id={props.edu.id}>
            <strong>{props.edu.year}</strong>
            <h3>{props.edu.institute}</h3>
            <p>{props.edu.desc}</p>
            <input type="button" value="X" onClick={deleteHandler} />
            <input type="button" value="Edit" onClick={editHandler} />
        </div>
    )
}

export default EducationFormListItem;