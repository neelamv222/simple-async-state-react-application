import React from "react";
import PropTypes from "prop-types";


import DashedBorder from "../../DashedBorder/DashedBorder"

const RepositoryItem = (props) => {

    return (
        <li className="repository-row">
            <span className="repository-cell">{props.item.name} </span>
            <span className="repository-cell"><span role="img" aria-label="star-img" className="star-style">&#9733;</span>{props.item.stars} </span>
            <span className="repository-cell"><span role="img" aria-label="star-img"> &#127860;</span> {props.item.forks} </span>
            <DashedBorder />
        </li>
    )

}

RepositoryItem.propTypes = {
    item: PropTypes.object
}


export default RepositoryItem;


