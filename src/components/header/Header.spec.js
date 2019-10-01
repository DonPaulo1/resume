import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
    let wrapper
    beforeEach(() => wrapper = shallow(<Header personalInformation={} />))
    it('should render a section wrapper', () => {
        expect(wrapper.find('section').length).toEqual(1);
    })

})