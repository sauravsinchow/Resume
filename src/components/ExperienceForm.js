import { useEffect, useState } from "react";
import { generateUID } from "../utils/utils";
import ExperienceFormListItem from './ExperienceFormListItem'

function ExperienceForm(props){

    const [company,setCompany] = useState('');
    const [year,setYear] = useState('');
    const [desc,setDesc] = useState('');

    const [list,setList] = useState([]);

    useEffect(()=>{
        setList(props.dataModel.exp);
    },[]);

    const onCompanyChange = (e) => {
        setCompany(e.target.value);
    }
    const onYearChange = (e) => {
        setYear(e.target.value);
    }
    const onDescChange = (e) => {
        setDesc(e.target.value);
    }

    const addExp = () => {
        const updatedList = [...list, {id: generateUID(), company, year, desc}];
        setList(updatedList);
        props.submitHandler(updatedList);

        setCompany('');
        setDesc('');
        setYear('');
    }

    const deleteExp = (id) => {
        const updatedList = list.filter(exp => exp.id !== id)
        setList(updatedList);
        props.submitHandler(updatedList);
    }

    return (
        <>
            <input type="text" id="company" placeholder="Company Name" value={company} onInput={onCompanyChange} />
            <br />
            <input type="text" id="expYear" placeholder="Year" value={year} onInput={onYearChange} />
            <br />
            <input type="text" id="expDesc" placeholder="Description" value={desc} onInput={onDescChange} />
            <br />
            <input type="button" value="Add" id="exp-btn" onClick={addExp} />

            <ul>
                {
                    list.map(exp => <ExperienceFormListItem exp={exp} key={exp.id} deleteHandler={deleteExp} />)
                }
            </ul>
        </>
    )
}

export default ExperienceForm;