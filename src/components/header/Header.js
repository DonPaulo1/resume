import React from 'react'

const Header = ({ personalInformation }) => {

    return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
            <h1 className="mb-0">{personalInformation.firstName}
                <span className="text-primary ml-1">{personalInformation.lastName}</span>
            </h1>
            <div className="subheading mb-5">{personalInformation.address} · {personalInformation.telephone} ·
<a href="mailto:name@email.com">{personalInformation.email}</a>
            </div>
            <p className="lead mb-5">
                Software developer with 3 years of professional experience in web development. Enthusiastic, open minded, and result oriented. Proficient in Php, Laravel framework, Node.js, Express.js, React.js, Jquery and Spring Boot. Deep understanding of Object Oriented Programming principles in production application design and development with SOLID principles.
    
    Professional experience in relational database design and development using Mysql, POstgreSql, Eloquent ORM, and Sequelize ORM. Practical understanding of Web services and REST API design and development with JSON. Full software development lifecycle understanding; from idea, concept, and coding to usable application in production. Project management with Trello. Code version control with Bit, GitHub and Bitbucket. Practical experience with npm and  composer for package management.
</p>
            <div className="social-icons">
                <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                    <i className="fab fa-github"></i>
                </a>
                <a href="#">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                    <i className="fab fa-facebook-f"></i>
                </a>
            </div>
        </div>
    </section>
    )
}

export default Header