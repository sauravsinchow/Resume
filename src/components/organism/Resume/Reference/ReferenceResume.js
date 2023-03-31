import ReferenceResumeListItem from "./ReferenceResumeListItem";

function ReferenceResume(props){
    return (
        <div className="section reference">
            <h1 className="title">Reference</h1>
            <hr />
            <div className="content">
                {
                    props.Ref.map(ref => <ReferenceResumeListItem key={ref.id} Ref={ref} />)
                }    
            </div>
        </div>
    )
}

export default ReferenceResume;