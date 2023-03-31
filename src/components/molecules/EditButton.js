import Button from "../atoms/Button";
import { PropTypes } from 'prop-types'

function EditButton(props){

    const {
        cancelEdit,
        saveChange,
        ...restProps
    } = props;

    return (
        <div className="edit">
            <Button value="Cancel" className="cancelBtn" onClick={cancelEdit} />
            <Button value="Save Changes" className="SaveBtn" onClick={saveChange} />
        </div>
    )
}

EditButton.propTypes = {
    cancelEdit: PropTypes.func,
    saveChange: PropTypes.func,
}

EditButton.defaultProp = {
    cancelEdit: ()=>{alert("No cancelEdit added")},
    saveChange: ()=>{alert("No saveChange added")},
}

export default EditButton;