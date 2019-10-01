import React from 'react';
import { shallow } from 'enzyme';
import Skills from './Skills';

describe('Skills', () => {
    let wrapper
    beforeEach(() => wrapper = shallow(<Skills skills={} />))
    it('should render a section wrapper', () => {
        expect(wrapper.find('section').length).toEqual(1);
    })

})