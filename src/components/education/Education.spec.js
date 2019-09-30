import React from 'react';
import { shallow } from 'enzyme';
import Education from './Education';

describe('Education', () => {
    let wrapper
    beforeEach(() => wrapper = shallow(<Education />))
    it('should render a section wrapper', () => {
        expect(wrapper.find('section').length).toEqual(1);
    })
 
})