import React from 'react'

const Education = ({ educationInformation }) => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div className="w-100">
                <h2 className="mb-5">Education</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">{educationInformation.school}
                            <span className="text-primary ml-1">{educationInformation.location}</span>
                        </h3>
                        <div className="subheading mb-3">{educationInformation.degree}</div>
                        <p>{educationInformation.about_school}</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">{educationInformation.from} - {educationInformation.to}</span>
                    </div>
                </div>

            </div>
        </section>
    )

}

export default Education
