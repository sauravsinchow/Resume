import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRefAction, deleteRefAction } from "../../../../redux/referals/referalsActions";
import { generateUID } from "../../../../utils/utils";
import ReferenceFormListItem from "./components/ReferenceFormListItem";

const createNewRef = (name, post, company) => {
    return {
        id: generateUID(),
        name, 
        post, 
        company
    }
}

function ReferenceForm(){

    const dispatch = useDispatch();
    const referalData = useSelector(state => state.referals.list);

    const [name,setName] = useState('');
    const [post,setPost] = useState('');
    const [company,setCompany] = useState('');

    const onNameChange = e => {
        setName(e.target.value);
    }
    const onPostChange = e => {
        setPost(e.target.value);
    }
    const onCompanyChange = e => {
        setCompany(e.target.value);
    }

    const addRef = () => {
        const newRef = createNewRef(name,post,company);
        dispatch(addRefAction(newRef));

        setName('');
        setPost('');
        setCompany('');
    }

    const deleteRef = id => {
        dispatch(deleteRefAction(id));
    }

    return (
        <>
            <input type="text" id="refName" placeholder="Name" value={name} onInput={onNameChange} />
            <br />
            <input type="text" id="post"  placeholder="Post" value={post} onInput={onPostChange} />
            <br />
            <input type="text" id="refCompany"  placeholder="Company" value={company} onInput={onCompanyChange} />
            <br />
            <input type="button" value="Add" id="ref-btn" onClick={addRef} />

            <ul>
                {
                    referalData.map(ref => <ReferenceFormListItem key={ref.id} Ref={ref} deleteHandler={deleteRef} />)
                }
            </ul>
        </>
    )
}

export default ReferenceForm;