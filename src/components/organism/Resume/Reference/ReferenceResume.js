import ReferenceResumeListItem from "./ReferenceResumeListItem";
import { useSelector } from "react-redux";

function ReferenceResume(){

    const referalData = useSelector(state => state.referals.list);

    return (
        <div className="section reference">
            <h1 className="title">Reference</h1>
            <hr />
            <div className="content">
                {
                    referalData.map(ref => <ReferenceResumeListItem key={ref.id} Ref={ref} />)
                }    
            </div>
        </div>
    )
}

export default ReferenceResume;