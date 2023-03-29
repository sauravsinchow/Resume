import { useEffect, useState } from "react";
import { generateUID } from "../utils/utils";
import ReferenceFormListItem from "./ReferenceFormListItem";

function ReferenceForm(props){

    const [name,setName] = useState('');
    const [post,setPost] = useState('');
    const [company,setCompany] = useState('');

    const [list,setList] = useState([]);

    useEffect(()=>{
        setList(props.dataModel.ref);
    },[]);

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
        const updatedList = [...list, {id: generateUID(), name, post, company}];
        setList(updatedList);
        props.submitHandler(updatedList);

        setName('');
        setPost('');
        setCompany('');
    }

    const deleteRef = id => {
        const updatedList = list.filter(ref => ref.id !== id);
        setList(updatedList);
        props.submitHandler(updatedList);
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
                    list.map(ref => <ReferenceFormListItem key={ref.id} Ref={ref} deleteHandler={deleteRef} />)
                }
            </ul>
        </>
    )
}

export default ReferenceForm;