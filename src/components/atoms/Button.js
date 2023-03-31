import { PropTypes } from 'prop-types'

function Button(props){

    const {
        id,
        value,
        className,
        onClick,
        ...restProps
    } = props;

    return (
        <input type="button" value={value} id={id} className={className} onClick={onClick} />
    )
}

Button.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProp = {
    id: Date.now(),
    value: "Button",
    className: "Button",
    onClick: ()=>{alert("No onClick added")}
}

export default Button;