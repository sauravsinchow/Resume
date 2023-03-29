import EducationResumeListItem from "./EducationResumeListItem";

function EducationResume(props){
    return (
        <div className="section education">
            <h1 className="title">Education</h1>
            <hr />
            <div className="content">
                {
                    props.edu.map(edu => <EducationResumeListItem edu={edu} key={edu.id} />)
                }        
            </div>
        </div>
    )
}

export default EducationResume;