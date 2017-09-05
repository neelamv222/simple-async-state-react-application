import React from "react";

import "./DashedBorder.css"
import {DASHED_BORDER} from "../../constants"

const DashedBorder = () => {
    return (
        <span className="dashed-border">
           {DASHED_BORDER}
        </span>
    )
}

export default DashedBorder;