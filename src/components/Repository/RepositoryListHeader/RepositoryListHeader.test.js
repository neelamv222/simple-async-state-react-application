import React from 'react';
import { mount } from 'enzyme';

import RepositoryListHeader from './RepositoryListHeader';
import DashedBorder from "../../DashedBorder/DashedBorder";

describe('<RepositoryListHeader />', () => {

    it('should renders <DashedBorder> component', () => {
        const wrapper = mount(<RepositoryListHeader />);
        expect(wrapper.find(DashedBorder)).toHaveLength(2);
    });

});

