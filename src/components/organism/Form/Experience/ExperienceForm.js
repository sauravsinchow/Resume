import { useEffect, useState } from "react";
import { generateUID } from "../../../../utils/utils";
import EditButton from "../../../molecules/EditButton";
import ExperienceFormListItem from './components/ExperienceFormListItem'

const createNewExp = ( company, year, desc) => {
    return {
        id: generateUID(),
        company, 
        year, 
        desc
    }
}

function ExperienceForm(props){

    const {
        submitHandler,
        exp,
        ...restProps
    } = props;

    const [company,setCompany] = useState('');
    const [year,setYear] = useState('');
    const [desc,setDesc] = useState('');

    const [editing, setEditing] = useState(false);
    const [editId, setEditId] = useState('');

    const [list,setList] = useState([]);

    useEffect(()=>{
        setList(exp);
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
        const newExp = createNewExp(company,year,desc)
        const updatedList = [...list, newExp];
        setList(updatedList);
        submitHandler(updatedList);

        setCompany('');
        setDesc('');
        setYear('');
    }

    const deleteExp = (id) => {
        const updatedList = list.filter(exp => exp.id !== id)
        setList(updatedList);
        submitHandler(updatedList);
    }

    const editExp = (exp) => {
        setEditing(true);
        setCompany(exp.company);
        setDesc(exp.desc);
        setYear(exp.year);

        setEditId(exp.id);
    }

    const cancelEdit = () => {
        setEditing(false);
        setCompany('');
        setDesc('');
        setYear('');

        setEditId('');
    }

    const saveChange = () => {
        
        const updatedList = list.map(exp => {
            if(exp.id === editId){
                return {editId, company, year, desc};
            }
            return exp;
        })
        setList(updatedList);
        submitHandler(updatedList);

        setEditing(false);
        setCompany('');
        setDesc('');
        setYear('');
        setEditId('');
    }

    return (
        <>
            <input type="text" id="company" placeholder="Company Name" value={company} onInput={onCompanyChange} />
            <br />
            <input type="text" id="expYear" placeholder="Year" value={year} onInput={onYearChange} />
            <br />
            <input type="text" id="expDesc" placeholder="Description" value={desc} onInput={onDescChange} />
            <br />
            {
                editing || 
                <>
                    <input type="button" value="Add" id="exp-btn" onClick={addExp} />
                    <ul>
                        {
                            list.map(exp => <ExperienceFormListItem exp={exp} key={exp.id} deleteHandler={deleteExp} editHandler={editExp} />)
                        }
                    </ul>
                </>
            }
            {
                editing && 
                <EditButton cancelEdit={cancelEdit} saveChange={saveChange} />
            }
            
        </>
    )
}

export default ExperienceForm;