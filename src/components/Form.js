import { useState } from "react";
import ImageForm from "./ImageForm";
import ExperienceForm from "./ExperienceForm";
import AwardsForm from "./AwardsForm";
import EducationForm from "./EducationForm";
import IntroForm from "./IntroForm";
import SkillsForm from "./SkillsForm";
import ReferenceForm from "./ReferenceForm";

function Form(props){

    const onFormSubmit = (data) => {
        props.onFormSubmit(section,data);
        console.log(data);
    }

    const innerForms = {
        'intro' : <IntroForm submitHandler={onFormSubmit} />,
        'skill' : <SkillsForm submitHandler={onFormSubmit} dataModel={props.dataModel} />,
        'edu' : <EducationForm submitHandler={onFormSubmit} dataModel={props.dataModel} />,
        'awards' : <AwardsForm submitHandler={onFormSubmit} dataModel={props.dataModel} />,
        'exp' : <ExperienceForm submitHandler={onFormSubmit} dataModel={props.dataModel} />,
        'ref' : <ReferenceForm submitHandler={onFormSubmit} dataModel={props.dataModel} />,
        'img' : <ImageForm submitHandler={onFormSubmit} dataModel={props.dataModel} />
    }

    const [section,setSection] = useState('none');

    const sectionChangeHandler = (e) => {
        setSection(e.target.value);
        console.log(section);
    }

    return (
        <div className="form">
            <form className="subForm">
                <fieldset>
                    <legend>
                        <select name="topic" value={section} onChange={sectionChangeHandler} id="topic">
                            <option value="none">Select</option>
                            <option value="intro">Intro</option>
                            <option value="skill">Skills</option>
                            <option value="edu">Education</option>
                            <option value="awards">Award</option>
                            <option value="exp">Experience</option>
                            <option value="ref">Reference</option>
                            <option value="img">Image</option>
                        </select>
                    </legend>
                    <div className="formContent">
                        {innerForms[section]}
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Form;