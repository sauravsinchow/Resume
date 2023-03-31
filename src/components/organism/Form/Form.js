import { useCallback, useMemo, useState } from "react";
import ImageForm from "./Image/ImageForm";
import ExperienceForm from "./Experience/index";
import AwardsForm from "./Awards/index";
import EducationForm from "./Education/index";
import IntroForm from "./Intro/IntroForm";
import SkillsForm from "./Skill/index";
import ReferenceForm from "./Reference/index";

function Form(props){

    const {
        dataModel,
        onFormSubmit: onFormSubmitFromProps ,
        ...restProps
    } = props;

    const [section,setSection] = useState('none');

    const onFormSubmit = useCallback( (data) => {
        onFormSubmitFromProps(section,data);
        console.log(section,data);
    } , [section, onFormSubmitFromProps] );

    
    const innerForms = useMemo( () => {
        return {
        'intro' : <IntroForm submitHandler={onFormSubmit} />,
        'skill' : <SkillsForm submitHandler={onFormSubmit} skill={dataModel.skill} />,
        'edu' : <EducationForm submitHandler={onFormSubmit} edu={dataModel.edu} />,
        'awards' : <AwardsForm submitHandler={onFormSubmit} awards={dataModel.awards} />,
        'exp' : <ExperienceForm submitHandler={onFormSubmit} exp={dataModel.exp} />,
        'ref' : <ReferenceForm submitHandler={onFormSubmit} Ref={dataModel.ref} />,
        'img' : <ImageForm submitHandler={onFormSubmit} />
    } }, [dataModel, onFormSubmit] )

    const sectionChangeHandler = (e) => {
        console.log(e.target.value);
        setSection(e.target.value);
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