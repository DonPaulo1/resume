import React from 'react'
import Job from './Job'

const Experience = ({ experienceData }) => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div className="w-100">
                <h2 className="mb-5">Experience</h2>
                {
                    experienceData.map((job, index) => {
                        return (
                            <Job key={index} job={job} />
                        )
                    })
                }


            </div>

        </section>
    )

}

export default Experience