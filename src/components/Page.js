import { useState } from "react";
import AwardResume from "./AwardResume";
import EducationResume from "./EducationResume";
import ExperienceResume from "./ExperienceResume";
import ImageContainer from "./ImageContainer";
import OverviewResume from "./OverviewResume";
import ReferenceResume from "./ReferenceResume";
import SkillResume from "./SkillResume";

function Page(props){

    return (
        <div className="page">
            <div id='left'>
                <ImageContainer img={props.data.img} intro={props.data.intro} />
                <SkillResume skill={props.data.skill} />
                <EducationResume edu={props.data.edu} />
                <AwardResume awards={props.data.awards} />
            </div>
            <div id='right'>
                <OverviewResume intro={props.data.intro} />
                <ExperienceResume exp={props.data.exp} />
                <ReferenceResume Ref={props.data.ref} />
            </div>
        </div>
    )
}

export default Page;