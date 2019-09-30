import React from 'react';
import { shallow } from 'enzyme';
import Development from './Development';

describe('Development', () => {
    let wrapper
    beforeEach(() => wrapper = shallow(<Development />))
    it('should render a section wrapper', () => {
        expect(wrapper.find('section').length).toEqual(1);
    })

})