import React, { Component } from 'react';
import Header from './components/header/Header'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'
import Development from './components/development/Development'
import App1 from './App'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
class App extends Component {
  constructor() {
    super()
    this.state = {
      //personal information
      personalInformation: {
        name: 'Pierre Nshimyumuremyi',
        email: 'pierrecelestin.nshimyumuremyi@gmail.com',
        telephone: '773-782-7536',
        address: 'Chicago, Illinois'
      },
      //skills
      skills: [
        'FullStack Web Development', 'Relational Database Development', 'Version control with Git',
        'REST API Development', 'Clean Code development with Repository pattern'
      ],
      //experience information
      experienceData: [
        { company: 'Inyarwanda Ltd', about_company: '', location: 'KIgali, Rwanda', jobTitle: 'Software Developer', achievements: [], from: '', to: '' },
        { company: 'BSmart Technologies Rwanda Ltd', about_company: '', location: 'Kigali, Rwanda', jobTitle: 'Application Developer', achievements: [], from: '', to: '' }
      ],
      //education information
      educationInformation: { school: 'University of Rwanda', location: 'Kigali,Rwanda', about_school: '', degree: 'Bachelor of Science in Computer Engineering', time: { from: '2012', to: '2015' } },
      //personal development
      personalDevelopmentData: [{}, {}]
    }
  }
  render() {
    const { personalInformation, skills, experienceData, educationInformation, personalDevelopmentData } = this.state
    return (
      <div className="App">
        {/* <Header personalInformation={personalInformation} />
        <Skills skills={skills} />
        <Experience experienceData={experienceData} />
        <Education educationInformation={educationInformation} />
        <Development personalDevelopmentData={personalDevelopmentData} /> */}
        <Router>
          <Route exact path="/test" component={App1} />
        </Router>
      </div>
    );
  }

}

export default App;
