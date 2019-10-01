import React from 'react';
import { shallow } from 'enzyme';
import Interests from './Interests';

describe('Interests', () => {
    let wrapper
    beforeEach(() => wrapper = shallow(<Interests interets={[]} />))
    it('should render a section wrapper', () => {
        expect(wrapper.find('section').length).toEqual(1);
    })

})