import { useEffect, useState } from "react";
import { generateUID } from "../utils/utils";
import AwardFormListItem from "./AwardFormListItem";

function AwardsForm(props){

    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');

    const [list,setList] = useState([]);

    useEffect(()=>{
        setList(props.dataModel.awards);
    },[]);

    const onTitleChange = (e) =>{
        setTitle(e.target.value);
    }
    const onDescChange = (e) =>{
        setDesc(e.target.value);
    }

    const addAwards = () => {
        const updatedList = [...list, {id: generateUID(), title, desc}];
        setList(updatedList);
        props.submitHandler(updatedList);

        setTitle('');
        setDesc('');
    }

    const deleteAward = (id) => {
        const updatedList = list.filter(award => award.id != id);
        setList(updatedList);
        props.submitHandler(updatedList);
    }

    return (
        <>
            <input type="text" id="title" placeholder="Title" value={title} onInput={onTitleChange} />
            <br />
            <input type="text" id="Awarddesc" placeholder="Description" value={desc} onInput={onDescChange} />
            <br />
            <input type="button" value="Add" id="award-btn" onClick={addAwards} />

            <ul>
                {
                    list.map(award => <AwardFormListItem award={award} deleteHandler={deleteAward} key={award.id} />)
                }
            </ul>
        </>
    )
}

export default AwardsForm;