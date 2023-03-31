import ExperienceResumeListItem from "./ExperienceResumeListItem";

function ExperienceResume(props){
    return (
        <div className="section experience">
            <h1 className="title">Work Experience</h1>
            <hr />
            <div className="content">
                {
                    props.exp.map(exp => <ExperienceResumeListItem key={exp.id} exp={exp} />)
                }         
            </div>
        </div>
    )
}

export default ExperienceResume;