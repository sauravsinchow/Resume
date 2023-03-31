import { useEffect, useState } from "react";
import { generateUID } from "../../../../utils/utils";
import EducationFormListItem from "./components/EducationFormListItem";
import EditButton from '../../../molecules/EditButton';

function EducationForm(props){

    const {
        edu,
        submitHandler,
        ...restProps
    } = props;

    const [institute,setInstitute] = useState('');
    const [year,setYear] = useState('');
    const [desc,setDesc] = useState('');

    const [editing, setEditing] = useState(false);
    const [editID, setEditID] = useState('');

    const [list,setList] = useState([]);

    useEffect(()=>{
        setList(edu);
    },[]);

    const onInstituteChange = (e) => {
        setInstitute(e.target.value)
    }
    const onYearChange = (e) => {
        setYear(e.target.value)
    }
    const onDescChange = (e) => {
        setDesc(e.target.value)
    }

    const addEdu = () => {
        const updatedList = [...list, {id: generateUID(), institute, year, desc}];
        setList(updatedList);
        submitHandler(updatedList);
        setInstitute('');
        setDesc('');
        setYear('');
    }

    const deleteEdu = (id) => {
        const updatedList = list.filter(edu => edu.id !== id);
        setList(updatedList);
        submitHandler(updatedList);
    }

    const editEdu = (edu) => {
        setEditing(true);

        setInstitute(edu.institute);
        setDesc(edu.desc);
        setYear(edu.year);
        setEditID(edu.id);
    }

    const cancelEdit = () => {
        setEditing(false);
        setInstitute('');
        setDesc('');
        setYear('');
        setEditID('');
    }

    const saveChange = () => {
        setEditing(false);
        const updatedList = list.map(edu => {
            if(edu.id === editID){
                return {editID, institute, year, desc};
            }
            return edu;
        })
        setList(updatedList);
        submitHandler(updatedList);

        setInstitute('');
        setDesc('');
        setYear('');
        setEditID('');
    }

    return (
        <>
            <input type="text" id="institute" placeholder="Institute Name" value={institute} onInput={onInstituteChange} />
            <br />
            <input type="text" id="year" placeholder="Year" value={year} onInput={onYearChange} />
            <br />
            <input type="text" id="desc" placeholder="Description" value={desc} onInput={onDescChange} />
            <br />
            
            {
                editing ||
                <>
                    <input type="button" value="Add" id="edu-btn" onClick={addEdu} />
                    <ul>
                        {
                            list.map(edu => <EducationFormListItem edu={edu} key={edu.id} deleteHandler={deleteEdu} editHandler={editEdu} />)
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

export default EducationForm;