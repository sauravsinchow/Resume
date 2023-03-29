function EducationResumeListItem(props){
    return (
        <div className="Sub">
            <strong>{props.edu.year}</strong>
            <h3>{props.edu.institute}</h3>
            <p>{props.edu.desc}</p>
        </div>
    )
}

export default EducationResumeListItem;