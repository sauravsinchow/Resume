function SkillResume(props){
    
    return (
        <div className="section experties">
            <h1 className="title">Experties</h1>
            <hr />
            <div className="content">
                <ul>
                    {
                        props.skill.map(skill => <li key={skill.id}>{skill.name}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default SkillResume;