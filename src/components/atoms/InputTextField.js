import { PropTypes } from 'prop-types'

function InputTextField(props){

    const {
        id,
        placeholder,
        value,
        onInput,
        ...restProps
    } = props;

    return (
        <input type='text' id={id} placeholder={placeholder} value={value} onInput={onInput} />
    )
}

InputTextField.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onInput: PropTypes.func
}

InputTextField.defaultProp = {
    id: Date.now(),
    value: "Button",
    className: "Button",
    onClick: ()=>{alert("No onClick added")}
}

export default InputTextField;