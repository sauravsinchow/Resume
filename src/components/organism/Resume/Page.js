import { useState } from "react";
import AwardResume from "./Awards/AwardResume";
import EducationResume from "./Education/EducationResume";
import ExperienceResume from "./Experience/ExperienceResume";
import ImageContainer from "./Intro/ImageContainer";
import OverviewResume from "./Intro/OverviewResume";
import ReferenceResume from "./Reference/ReferenceResume";
import SkillResume from "./Skills/SkillResume";

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