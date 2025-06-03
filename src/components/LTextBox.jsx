import PropTypes from "prop-types";

export default function LTextBox(props) {
    console.log(props.change);
  return (
    <>
        <input type={props.type} name={props.name} autoComplete={props.autocomplete} id={props.name} required onChange={props.change()} value={props.value} maxLength={props.maxlength} className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none basis-1/4 grow  "/>
    </>
  );
}

LTextBox.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  change: PropTypes.func.isRequired,
  maxlength: PropTypes.number,
  minlength: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.string,
  autocomplete: PropTypes.string
};