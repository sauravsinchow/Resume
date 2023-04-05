import { useEffect, useState } from "react";
import { generateUID } from "../../../../utils/utils";
import AwardFormListItem from "./components/AwardFormListItem";
import InputTextField from '../../../atoms/InputTextField';
import Button from '../../../atoms/Button';
import { useDispatch, useSelector } from "react-redux";
import { addAwardAction, deleteAwardAction } from "../../../../redux/awards/awardsActions";

const createNewAward = (title,desc) => {
    return {
        id: generateUID(),
        title,
        desc
    };
}

function AwardsForm(){

    const dispatch = useDispatch();

    const awardsData = useSelector(state => state.awards.list);

    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');

    const onTitleChange = (e) =>{
        setTitle(e.target.value);
    }
    const onDescChange = (e) =>{
        setDesc(e.target.value);
    }

    const addAwards = () => {
        const newAward = createNewAward(title,desc);
        dispatch(addAwardAction(newAward));

        setTitle('');
        setDesc('');
    }

    const deleteAward = (id) => {
        dispatch(deleteAwardAction(id));
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
                    awardsData.map(award => <AwardFormListItem award={award} deleteHandler={deleteAward} key={award.id} />)
                }
            </ul>
        </>
    )
}

export default AwardsForm;