import React from "react";
import PropTypes from "prop-types";

import RepositoryItem from "../RepositoryItem/RepositoryItem"
import { COLLAPSE_MODE } from "../../../constants";
import "./RepositoryListBody.css"

const RepositoryListBody = (props) => {

    /**  
      *  Depending on the expand or collapse mode, it will display the list of repositories.
      *  By default, the mode is collapse mode.
    **/
    const displayRepositoriesList = () => {
        let cloneRepositoryList = [];
        if (props.repositories.length > 0) {
            if (props.mode === COLLAPSE_MODE) {
                cloneRepositoryList = props.repositories.slice(0, props.items);
            }
            else {
                cloneRepositoryList = props.repositories;
            }
            return cloneRepositoryList.map((elem, index) => {
                return (
                    <RepositoryItem key={index} item={elem} />
                )
            })
        }
        else {
            return (<h3 className="loading">Loading...</h3>);
        }

    }

    return (
        <ul className="list-body-wrapper">
            {displayRepositoriesList()}
        </ul>
    )

}

RepositoryListBody.propTypes = {
    repositories: PropTypes.array,
    mode: PropTypes.string,
    items: PropTypes.number
}


export default RepositoryListBody;


