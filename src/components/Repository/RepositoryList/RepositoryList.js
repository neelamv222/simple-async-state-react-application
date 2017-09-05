import React, { Component } from 'react';

import RepositoryListHeader from "../RepositoryListHeader/RepositoryListHeader";
import RepositoryListBody from "../RepositoryListBody/RepositoryListBody";
import ToggleButton from "../../ToggleButton/ToggleButton";
import getReactRepos from '../../../service/getReactRepos';
import { SEE_MORE, COLLAPSE_MODE, NUM_ITEMS_COLLAPSE_MODE } from "../../../constants";

export default class RepositoryList extends Component {

    constructor(props) {
        super();

        this.state = {
            repositories: [],
            toggleBtn: {
                text: SEE_MORE,
                mode: COLLAPSE_MODE
            }
        };
    }

    componentDidMount() {
        this.fetchReactRepo();
    }


    /**  
      *  Set the state "repositories" with the API response
    **/
    fetchReactRepo() {
        var self = this;
        getReactRepos().then((result) => {
            const repositories = result
            self.setState({ repositories })
        },
            (reason) => console.warn('getReactRepos Rejection reason:', reason)
        )
            .catch((error) => console.error('getReactRepos Error:', error))
    }


    /**  
      *  On click of button, expand or collapse the list of respositories by change the state "toggleBtn"
      *  depending on the obj coming from the "ToggleButton" component.
      *  
    **/
    toggleRepositoryList(obj) {
        this.setState({
            toggleBtn: {
                text: obj.text,
                mode: obj.mode
            }
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <RepositoryListHeader />
                    <li className="repository-row">
                        <RepositoryListBody repositories={this.state.repositories} mode={this.state.toggleBtn.mode} items={NUM_ITEMS_COLLAPSE_MODE}/>
                    </li>
                </ul>
                <ToggleButton toggleRepositoryList={this.toggleRepositoryList.bind(this)} toggleBtnText={this.state.toggleBtn.text} mode={this.state.toggleBtn.mode} />
            </div>
        );
    }
}
