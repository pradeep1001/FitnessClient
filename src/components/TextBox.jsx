import PropTypes from "prop-types";
export default function TextBox(props) {
    
  return (
    <>
        <input  type="text" name={props.name} id={props.id} onChange={props.onchange} value={props.value}  className=" " disabled={props.operation == "Delete"}/>
    </>
  );
}

TextBox.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  validation: PropTypes.object.isRequired,
};