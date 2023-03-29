import { useRef, useState } from "react";

function ImageForm(props){

    const [url, setURL] = useState('');

    const imgInput = useRef();

    const onSubmitHandler = () => {
        let reader = new FileReader();
        reader.onload = function(e) {
            setURL(e.target.result);
            props.submitHandler({url: e.target.result});
        }
        reader.readAsDataURL(imgInput.current.files[0]);
        
        imgInput.current.value='';
    }

    return (
        <>
            <input type="file" id="image" ref={imgInput} />
            <br />
            <input type="button" value="Submit" id="img-btn" onClick={onSubmitHandler} />
        </>
    )
}

export default ImageForm;