import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/header/Header'
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Development from './components/development/Development';
import Navigation from './components/navigation/Navigation';
import Interests from './components/interests/Interests';

describe('App', () => {
  let wrapper
  beforeEach(() => wrapper = shallow(<App />))
  it('should render a div', () => {

    expect(wrapper.find('div').length).toEqual(1);
  })

  it('should render Header component', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true)
  })
  it('should render Skills component', () => {
    expect(wrapper.containsMatchingElement(<Skills />)).toEqual(true)
  })
  it('should render Experience component', () => {
    expect(wrapper.containsMatchingElement(<Experience />)).toEqual(true)
  })
  it('should render Education component', () => {
    expect(wrapper.containsMatchingElement(<Education />)).toEqual(true)
  })
  it('should render Development component', () => {
    expect(wrapper.containsMatchingElement(<Development />)).toEqual(true)
  })
  it('should render Navigation component', () => {
    expect(wrapper.containsMatchingElement(<Navigation />)).toEqual(true)
  })
  it('should render Interests component', () => {
    expect(wrapper.containsMatchingElement(<Interests />)).toEqual(true)
  })

})