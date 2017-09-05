import React from 'react';
import { mount } from 'enzyme';

import RepositoryListBody from './RepositoryListBody';
import ToggleButton from "../../ToggleButton/ToggleButton";
import RepositoryItem from "../RepositoryItem/RepositoryItem"

describe('<RepositoryListBody />', () => {


    it('should have repositories prop value equal to repositories array value', () => {
        const repositories = [
            { name: 'react', stars: 69012, forks: 12581, url: 'http://…' },
            { name: 'react1', stars: 69012, forks: 12581, url: 'http://…' },
            { name: 'react2', stars: 69012, forks: 12581, url: 'http://…' },
            { name: 'react3', stars: 69012, forks: 12581, url: 'http://…' },
            { name: 'react4', stars: 69012, forks: 12581, url: 'http://…' }
        ]
        const wrapper = mount(<RepositoryListBody repositories={repositories} mode="Collapse" items={4} />)
        expect(wrapper.props().repositories).toEqual(repositories);
    });

    it('should render loading text when repositories array is empty', () => {
        const repositories = []
        const loading = "Loading..."
        const wrapper = mount(<RepositoryListBody repositories={repositories} mode="Collapse" items={4} />)
        expect(wrapper.find('h3').length).toBe(1);
        expect(wrapper.find('h3').at(0).text()).toBe(loading);
    });

    it('should render restricted number of data (as per "items" props passed ) in Collapse mode', () => {
        const repositories = [
            { name: 'react', stars: 69012, forks: 12581, url: 'http://…' },
            { name: 'react1', stars: 69012, forks: 12581, url: 'http://…' },
            { name: 'react2', stars: 69012, forks: 12581, url: 'http://…' },
            { name: 'react3', stars: 69012, forks: 12581, url: 'http://…' },
            { name: 'react4', stars: 69012, forks: 12581, url: 'http://…' }
        ]
        const wrapper = mount(<RepositoryListBody repositories={repositories} mode="Collapse" items={3} />)
        expect(wrapper.find(RepositoryItem)).toHaveLength(3);
    });

    it('should render all the data (RepositoryItem) in Expand mode', () => {
        const repositories = [
            { name: 'react', stars: 69012, forks: 12581, url: 'http://…' },
            { name: 'react1', stars: 69012, forks: 12581, url: 'http://…' },
            { name: 'react2', stars: 69012, forks: 12581, url: 'http://…' },
            { name: 'react3', stars: 69012, forks: 12581, url: 'http://…' },
            { name: 'react4', stars: 69012, forks: 12581, url: 'http://…' }
        ]
        const wrapper = mount(<RepositoryListBody repositories={repositories} mode="Expand" />)
        expect(wrapper.find(RepositoryItem)).toHaveLength(5);
    });

});

