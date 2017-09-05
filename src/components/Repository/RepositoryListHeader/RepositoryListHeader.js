import React from "react";

import DashedBorder from "../../DashedBorder/DashedBorder"

const RepositoryListHeader = () => {
    return (
        <li className="repository-row">
            <DashedBorder />
            <span className="repository-cell">&lt; name &gt; </span>
            <span className="repository-cell"><span role="img" aria-label="star-img" className="star-style">&#9733;</span>&lt; numberOfStars &gt; </span>
            <span className="repository-cell"><span role="img" aria-label="fork-img">&#127860;</span> &lt; numberOfForks &gt;  </span>
            <DashedBorder />
        </li>
    )
}

export default RepositoryListHeader;