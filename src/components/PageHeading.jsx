import PropTypes from "prop-types";

export default function PageHeading(props) {
    
  return (
    <>
        <h3 className="pl-5 py-3 mb-8 text-3xl border-y-2 border-dotted  border-indigo-600 text-indigo-600 font-semibold"><span className="text-4xl inline-block text-indigo-600">::</span> {props.heading} {props.operation} <span className="text-4xl inline-block text-indigo-600">::</span></h3>
    </>
  );
}

PageHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  operation: PropTypes.string
};