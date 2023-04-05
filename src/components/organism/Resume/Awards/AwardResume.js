import { useSelector } from "react-redux";
import AwardResumeListItem from "./AwardResumeListItem";

function AwardResume(){

    const awardsData = useSelector(state => state.awards.list)

    return (
        <div className="section award">
            <h1 className="title">Award</h1>
            <hr />
            <div className="content">
                {
                    awardsData.map(award => <AwardResumeListItem key={award.id} award={award} />)
                }  
            </div>
        </div>
    )
}

export default AwardResume;