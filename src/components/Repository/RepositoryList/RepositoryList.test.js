import React from 'react';
import { mount } from 'enzyme';

import RepositoryList from './RepositoryList';
import ToggleButton from "../../ToggleButton/ToggleButton";
import RepositoryListHeader from "../RepositoryListHeader/RepositoryListHeader";
import RepositoryListBody from "../RepositoryListBody/RepositoryListBody";
import { SEE_LESS, EXPAND_MODE, COLLAPSE_MODE, SEE_MORE } from "../../../constants"

describe('<RepositoryList />', () => {

    it('Toggle Button initial Text', () => {
        const wrapper = mount(<RepositoryList />);
        expect(wrapper.state().toggleBtn.text).toEqual('See More');
    });

    it('Toggle Button initial Mode', () => {
        const wrapper = mount(<RepositoryList />);
        expect(wrapper.state().toggleBtn.mode).toEqual('Collapse');
    });

    it('should renders <ToggleButton> component', () => {
        const wrapper = mount(<RepositoryList />);
        expect(wrapper.find(ToggleButton)).toHaveLength(1);
    });

    it('should renders <RepositoryListHeader> component', () => {
        const wrapper = mount(<RepositoryList />);
        expect(wrapper.find(RepositoryListHeader)).toHaveLength(1);
    });

    it('should renders <RepositoryListBody> component', () => {
        const wrapper = mount(<RepositoryList />);
        expect(wrapper.find(RepositoryListBody)).toHaveLength(1);
    });

    it('should call componentDidMount', () => {
        const spy = jest.spyOn(RepositoryList.prototype, 'componentDidMount');
        const wrapper = mount(<RepositoryList />);
        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();
    });

    it('should updates the state of RespositoryList on button click', () => {
        const exapndObj = {
            text: SEE_LESS,
            mode: EXPAND_MODE
        }
        const collapseObj = {
            text: SEE_MORE,
            mode: COLLAPSE_MODE
        }
        const wrapper = mount(<RepositoryList />);
        const button = wrapper.find('button');
        button.simulate('click');
        expect(wrapper.state().toggleBtn.text).toEqual(exapndObj.text);
        expect(wrapper.state().toggleBtn.mode).toEqual(exapndObj.mode);
        button.simulate('click');
        expect(wrapper.state().toggleBtn.text).toEqual(collapseObj.text);
        expect(wrapper.state().toggleBtn.mode).toEqual(collapseObj.mode);

    });
});
