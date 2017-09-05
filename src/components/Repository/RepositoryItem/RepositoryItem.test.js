import React from 'react';
import { mount } from 'enzyme';

import RepositoryItem from './RepositoryItem';
import DashedBorder from "../../DashedBorder/DashedBorder"

describe('<RepositoryItem />', () => {

    it('should have item props value equal to an object passed', () => {
        const wrapper = mount(<RepositoryItem item={{ name: 'react', stars: 69012, forks: 12581, url: 'http://…' }} />)
        expect(wrapper.props().item).toEqual({ name: 'react', stars: 69012, forks: 12581, url: 'http://…' });
    });

    it('should renders <DashedBorder> component', () => {
        const wrapper = mount(<RepositoryItem item={{ name: 'react', stars: 69012, forks: 12581, url: 'http://…' }} />);
        expect(wrapper.find(DashedBorder)).toHaveLength(1);
    });
});

