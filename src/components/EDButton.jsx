import PropTypes from "prop-types";
import { NavLink} from "react-router-dom";
export default function EDButton(props) {
    
    let cssClass = props.text.toLowerCase();
  return (
    <>
        <NavLink to={props.toLink} className={"mr-4 rounded-md font-semibold edbtn " + cssClass}>{props.text}</NavLink>
    </>
  );
}

EDButton.propTypes = {
  toLink: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};