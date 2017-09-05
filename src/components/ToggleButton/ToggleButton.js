import React from "react";
import PropTypes from "prop-types";

import { SEE_MORE, SEE_LESS, EXPAND_MODE, COLLAPSE_MODE } from "../../constants";
import "./ToggleButton.css"

const ToggleButton = (props) => {

    /**  
      *  On click of button, expand or collapse the list of respositories by passing appropriate object to 
      *  parent Component's method.
    **/
    const handleToggleButtonClick = () => {
        let toggleBtnObj = {};

        if (props.mode === COLLAPSE_MODE) {
            toggleBtnObj.text = SEE_LESS
            toggleBtnObj.mode = EXPAND_MODE;
            return props.toggleRepositoryList(toggleBtnObj);
        }
        else {
            toggleBtnObj.text = SEE_MORE
            toggleBtnObj.mode = COLLAPSE_MODE
            return props.toggleRepositoryList(toggleBtnObj);
        }
    }

    return (
        <button className="toggle-btn" onClick={() => handleToggleButtonClick()}>{props.toggleBtnText}</button>
    )
}

ToggleButton.propTypes = {
    toggleBtnText: PropTypes.string,
    mode: PropTypes.string,
    toggleRepositoryList: PropTypes.func
}

export default ToggleButton;