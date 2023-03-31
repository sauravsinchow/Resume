import { useEffect, useState } from "react";
import { generateUID } from "../../../../utils/utils";
import AwardFormListItem from "./components/AwardFormListItem";
import InputTextField from '../../../atoms/InputTextField';
import Button from '../../../atoms/Button';

function AwardsForm(props){

    const {
        awards,
        submitHandler,
        ...restProps
    } = props;

    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');

    const [list,setList] = useState([]);

    useEffect(()=>{
        setList(awards);
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
        submitHandler(updatedList);

        setTitle('');
        setDesc('');
    }

    const deleteAward = (id) => {
        const updatedList = list.filter(award => award.id !== id);
        setList(updatedList);
        submitHandler(updatedList);
    }

    return (
        <>
            <InputTextField id="title" placeholder="Title" value={title} onInput={onTitleChange} />
            <br />
            <InputTextField id="Awarddesc" placeholder="Description" value={desc} onInput={onDescChange} />
            <br />
            <Button value="Add" id="award-btn" onClick={addAwards} />

            <ul>
                {
                    list.map(award => <AwardFormListItem award={award} deleteHandler={deleteAward} key={award.id} />)
                }
            </ul>
        </>
    )
}

export default AwardsForm;