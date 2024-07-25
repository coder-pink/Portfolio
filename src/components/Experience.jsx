import data from "../assets/data.json"

function Experience() {
    return (
        <>
            <div id="experience">
                <h2>Experience</h2>
                <div className="experienceBox">
                    {
                       data.experience.map((item, index) => (
                        <ExperienceItem
                            key={index}
                            heading={item.title}
                            company={item.company}
                            duration={item.duration}
                            description={item.description}
                            index={index}
                        />
                    ))
                    }
                </div>
            </div>
        </>
    )
}




function ExperienceItem({ heading, company, duration, description, index }) {
    return (
        <div className={`experienceItem ${index % 2 === 0 ? "leftExp" : "rightExp"}`}>
            <h2>{heading}</h2>
            <h3>{company}</h3>
            <h4>{duration}</h4>
            {/* <p>{description}</p> */}
        </div>
    );
}


export default Experience
