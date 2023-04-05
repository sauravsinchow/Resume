import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addImgAction } from "../../../../redux/image/imageActions";

function ImageForm(){

    const dispatch = useDispatch();
    const imgInput = useRef();

    const onSubmitHandler = () => {
        let reader = new FileReader();
        reader.onload = function(e) {
            dispatch(addImgAction(e.target.result));
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