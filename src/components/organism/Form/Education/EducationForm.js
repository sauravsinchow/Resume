import { useEffect, useState } from "react";
import { generateUID } from "../../../../utils/utils";
import EducationFormListItem from "./components/EducationFormListItem";
import EditButton from '../../../molecules/EditButton';
import { useDispatch, useSelector } from "react-redux";
import { addEduAction, deleteEduAction, editEduAction } from "../../../../redux/edu/eduActions";

const createNewEdu = (institute, year, desc) => {
    return {
        id: generateUID(),
        institute,
        year,
        desc
    }
}

function EducationForm(){

    const dispatch = useDispatch();
    const eduData = useSelector(state => state.edu.list);

    const [institute,setInstitute] = useState('');
    const [year,setYear] = useState('');
    const [desc,setDesc] = useState('');

    const [editing, setEditing] = useState(false);
    const [editID, setEditID] = useState('');

    const [list,setList] = useState([]);

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
        const newEdu = createNewEdu(institute,year,desc);
        dispatch(addEduAction(newEdu));
        setInstitute('');
        setDesc('');
        setYear('');
    }

    const deleteEdu = (id) => {
        dispatch(deleteEduAction(id));
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
        dispatch(editEduAction({id: editID, institute, year, desc}));

        setEditing(false);
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
                            eduData.map(edu => <EducationFormListItem edu={edu} key={edu.id} deleteHandler={deleteEdu} editHandler={editEdu} />)
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