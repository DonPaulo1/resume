import React, { Component } from 'react'
import Navigation from './components/navigation/Navigation'
import Header from './components/header/Header'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'
import Development from './components/development/Development'
import Interests from './components/interests/Interests'
class App extends Component {
    constructor() {
        super()
        this.state = {
            //personal information
            personalInformation: {
                firstName: 'Pierre',
                lastName: 'Nshimyumuremyi',
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
                { company: 'Inyarwanda Ltd', location: 'KIgali, Rwanda', from: 'December,2016', to: 'April,2018', jobTitle: 'Software Developer', achievements: [] },
                { company: 'BSmart Technologies Rwanda Ltd', location: 'Kigali, Rwanda', from: 'May,2016', to: 'October,2018', jobTitle: 'Application Developer', achievements: [] }
            ],
            //education information
            educationInformation: {
                school: 'University of Rwanda', location: 'Kigali,Rwanda',
                about_school: 'Oldest and the largest university in Rwanda with robust science and technology and engineering schools            ',
                degree: 'Bachelor of Science, Computer Engineering', from: 'December, 2011', to: 'July, 2015'
            },
            //personal development
            personalDevelopmentData: [{}, {}],
            interests: []
        }
    }
    render() {
        const { personalInformation, skills, experienceData, educationInformation, personalDevelopmentData, interests } = this.state
        return (
            <div id="page-top">

                <Navigation />

                <div className="container-fluid p-0">

                    <Header personalInformation={personalInformation} />

                    <hr className="m-0" />

                    <Skills skills={skills} />

                    <hr className="m-0" />

                    <Experience experienceData={experienceData} />

                    <hr className="m-0" />

                    <Education educationInformation={educationInformation} />

                    <hr className="m-0" />

                    <Development personalDevelopmentData={personalDevelopmentData} />

                    <hr className="m-0" />

                    <Interests interets={interests} />



                </div>

            </div>
        )
    }
}

export default App
