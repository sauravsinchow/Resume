function AwardFormListItem(props) {

    const deleteHandler = () => {
        props.deleteHandler(props.award.id);
    }

    return (
        <div id={props.award.id}>
            <h3>{props.award.title}</h3>
            <p>{props.award.desc}</p>
            <input type="button" value="X" onClick={deleteHandler} />
        </div>
    )
}

export default AwardFormListItem;