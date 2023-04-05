import { useSelector } from "react-redux";
import ExperienceResumeListItem from "./ExperienceResumeListItem";

function ExperienceResume(){

    const expData = useSelector(state => state.exp.list)

    return (
        <div className="section experience">
            <h1 className="title">Work Experience</h1>
            <hr />
            <div className="content">
                {
                    expData.map(exp => <ExperienceResumeListItem key={exp.id} exp={exp} />)
                }         
            </div>
        </div>
    )
}

export default ExperienceResume;