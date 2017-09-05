import React from 'react';
import { mount } from 'enzyme';

import DashedBorder from './DashedBorder';
import {DASHED_BORDER} from "../../constants";

describe('<DashedBorder />', () => {

    it('should renders the text supplied to it', () => {
        const wrapper = mount(<DashedBorder />);
        const border = DASHED_BORDER;
        expect(wrapper.find('span').length).toBe(1);
        expect(wrapper.find('span').at(0).text()).toBe(border);
    });

});

