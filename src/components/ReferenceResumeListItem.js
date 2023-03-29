function ReferenceResumeListItem(props){
    return (
        <div className="Sub" >
            <h3>{props.Ref.name}</h3>
            <p>{props.Ref.post}</p>
            <p>{props.Ref.company}</p>
        </div>
    )
}

export default ReferenceResumeListItem;