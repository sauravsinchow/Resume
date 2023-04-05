import AwardResume from "./Awards/AwardResume";
import EducationResume from "./Education/EducationResume";
import ExperienceResume from "./Experience/ExperienceResume";
import ImageContainer from "./Intro/ImageContainer";
import OverviewResume from "./Intro/OverviewResume";
import ReferenceResume from "./Reference/ReferenceResume";
import SkillResume from "./Skills/SkillResume";

function Page(){

    return (
        <div className="page">
            <div id='left'>
                <ImageContainer />
                <SkillResume />
                <EducationResume />
                <AwardResume />
            </div>
            <div id='right'>
                <OverviewResume />
                <ExperienceResume />
                <ReferenceResume />
            </div>
        </div>
    )
}

export default Page;