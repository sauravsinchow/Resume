import AwardResumeListItem from "./AwardResumeListItem";

function AwardResume(props){
    return (
        <div className="section award">
            <h1 className="title">Award</h1>
            <hr />
            <div className="content">
                {
                    props.awards.map(award => <AwardResumeListItem key={award.id} award={award} />)
                }  
            </div>
        </div>
    )
}

export default AwardResume;