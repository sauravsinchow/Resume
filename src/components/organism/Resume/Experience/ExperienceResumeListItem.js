function ExperienceResumeListItem(props){
    return (
        <div className="Sub" id="1678439830719R">
            <p>{props.exp.year}</p>
            <h3>{props.exp.company}</h3>
            <p>{props.exp.desc}</p>
        </div>
    )
}

export default ExperienceResumeListItem;