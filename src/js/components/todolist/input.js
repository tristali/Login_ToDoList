import React from "react";
import PropTypes from "prop-types";
const Input = ({ handleSubmit, handleChange, handleAddList, value }) => (
    <div className="input-group">
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} />
            <input type="submit" value="ENTER" onClick={handleAddList} />
        </form>
    </div>
);
Input.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAddList: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};
export default Input;
