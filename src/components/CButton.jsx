import PropTypes from "prop-types";
import { NavLink} from "react-router-dom";
export default function CButton(props) {
    console.log(props.change);
  return (
    <>
        <NavLink to={props.toLink} className="bg-sky-500 hover:bg-sky-700 px-3 py-1 text-sm leading-5 rounded-md font-semibold text-white text-center">Create</NavLink>
    </>
  );
}

CButton.propTypes = {
  toLink: PropTypes.string.isRequired
};