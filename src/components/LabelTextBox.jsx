import PropTypes from "prop-types";
import TextBox from "../components/TextBox";
export default function LabelTextBox(props) {
    
    return (
        <>
            <label  className="">{props.label}</label>
            <TextBox type={props.type} name={props.name} id={props.id} onchange={props.onchange} value={props.value} operation={props.operation} validation={props.validation} />

        </>
    );
}

LabelTextBox.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    operation: PropTypes.string.isRequired,
    validation: PropTypes.object.isRequired,
};