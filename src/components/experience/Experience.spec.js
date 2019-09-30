import React from 'react';
import { shallow } from 'enzyme';
import Experience from './Experience';

describe('Experience', () => {
    let wrapper
    beforeEach(() => wrapper = shallow(<Experience />))
    it('should render a section wrapper', () => {
        expect(wrapper.find('section').length).toEqual(1);
    })

})