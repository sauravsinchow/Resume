import { useEffect, useState } from "react";
import { generateUID } from "../../../../utils/utils";
import ReferenceFormListItem from "./components/ReferenceFormListItem";

function ReferenceForm(props){

    const {
        Ref,
        submitHandler,
        ...restProps
    } = props;

    const [name,setName] = useState('');
    const [post,setPost] = useState('');
    const [company,setCompany] = useState('');

    const [list,setList] = useState([]);

    useEffect(()=>{
        setList(Ref);
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
        submitHandler(updatedList);

        setName('');
        setPost('');
        setCompany('');
    }

    const deleteRef = id => {
        const updatedList = list.filter(ref => ref.id !== id);
        setList(updatedList);
        submitHandler(updatedList);
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