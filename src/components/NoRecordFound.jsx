import PropTypes from "prop-types";

export default function NoRecordFound(props) {
    
    return (
        <>
            <div className="py-4 text-center info"> <b>No&nbsp;</b><span>{props.info} Record Found</span>
            </div>
        </>
    );
}

NoRecordFound.propTypes = {
    info: PropTypes.string.isRequired
};