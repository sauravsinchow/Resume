function AwardResumeListItem(props){
    const { title, titleVariant } = props
    return (
        <div className="Sub">
            <h3>{props.award.title}</h3>
            <p>{props.award.desc}</p>
        </div>
    )
}

export default AwardResumeListItem;