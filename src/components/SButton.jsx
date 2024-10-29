import PropTypes from "prop-types";
import { NavLink} from "react-router-dom";

export default function SButton(props) {
    
  return (
    <>
        <button type="submit" value={props.operation} className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">{props.operation}</button>
    </>
  );
}

SButton.propTypes = {
  operation: PropTypes.string.isRequired
};