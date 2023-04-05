import { useSelector } from "react-redux";

function SkillResume(){
    
    const skillsData = useSelector(state => state.skills.list);

    return (
        <div className="section experties">
            <h1 className="title">Experties</h1>
            <hr />
            <div className="content">
                <ul>
                    {
                        skillsData.map(skill => <li key={skill.id}>{skill.name}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default SkillResume;