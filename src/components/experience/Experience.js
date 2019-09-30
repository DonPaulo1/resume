import React from 'react'

const Experience = ({ experienceData }) => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div className="w-100">
                <h2 className="mb-5">Experience</h2>
                {
                    experienceData.map((job, index) => {
                        return (
                            <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="resume-content">
                                    <h3 className="mb-0">{job.jobTitle}</h3>
                                    <div className="subheading mb-3">{job.company}
                                        <span className="text-primary ml-1">{job.location}</span>
                                    </div>
                                    <p>{job.about_company}
                                    </p>
                                </div>
                                <div className="resume-date text-md-right">
                                    <span className="text-primary">{job.from} - {job.to}</span>
                                </div>
                            </div>
                        )
                    })
                }


            </div>

        </section>
    )

}

export default Experience