import React from 'react';
import { shallow } from 'enzyme';
import Interests from './Interests';

describe('Interests', () => {
    let wrapper
    beforeEach(() => wrapper = shallow(<Interests />))
    it('should render a section wrapper', () => {
        expect(wrapper.find('section').length).toEqual(1);
    })

})