import { useSelector } from "react-redux";
import EducationResumeListItem from "./EducationResumeListItem";

function EducationResume(){

    const eduData = useSelector(state => state.edu.list);

    return (
        <div className="section education">
            <h1 className="title">Education</h1>
            <hr />
            <div className="content">
                {
                    eduData.map(edu => <EducationResumeListItem edu={edu} key={edu.id} />)
                }        
            </div>
        </div>
    )
}

export default EducationResume;