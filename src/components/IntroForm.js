import { useState } from "react";

function IntroForm(props){

    const [name,setName] = useState('');
    const [role,setRole] = useState('');
    const [desc,setDesc] = useState('');

    const onNameChangeHandler = (e) => {
        setName(e.target.value);
        console.log(name);
    }

    const onRoleChangeHandler = (e) => {
        setRole(e.target.value);
    }

    const onDescChangeHandler = (e) => {
        setDesc(e.target.value);
    }

    const submitHandler = () => {
        props.submitHandler({name,role,desc});

        setName('');
        setRole('');
        setDesc('');
    }

    return (
        <>
            <input id="name" type="text" value={name} placeholder="Name" onInput={onNameChangeHandler} />
            <br />
            <input type="text" id="role" placeholder="Role" value={role} onInput={onRoleChangeHandler} />
            <br />
            <input type="text" id="overview-desc" placeholder="Description" value={desc} onInput={onDescChangeHandler} />
            <br />
            <input type="button" value="Submit" id="intro-btn" onClick={submitHandler} />
        </>
    )
}

export default IntroForm;