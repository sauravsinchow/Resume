function ReferenceFormListItem(props){

    const deleteHandler = () => {
        props.deleteHandler(props.Ref.id);
    }

    return (
        // <></>
        <div id={props.Ref.id}>
            <h3>{props.Ref.name}</h3>
            <p>{props.Ref.post}</p>
            <p>{props.Ref.company}</p>
            <input type="button" value="X" onClick={deleteHandler} />
        </div>
    )
}

export default ReferenceFormListItem;