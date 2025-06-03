import PropTypes from "prop-types";
import { NavLink} from "react-router-dom";
export default function CNavLink(props) {
    
  return (
    <>
        <NavLink to={props.toLink} className="bg-sky-500 hover:bg-sky-700 px-3 pt-2 pb-1.5 text-sm leading-5 rounded-md font-semibold text-white text-center">{props.anchortext}</NavLink>
    </>
  );
}

CNavLink.propTypes = {
  toLink: PropTypes.string.isRequired,
  anchortext:PropTypes.string.isRequired
};