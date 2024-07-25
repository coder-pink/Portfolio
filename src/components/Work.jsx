
import projectData from "../assets/data.json"; // Import your JSON data

function Work() {
    const { projects } = projectData;

    return (
        <div id="work">
            <h2>My Projects</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className='image-container'>
                        <img src={project.imgSrc} alt={project.title} />
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Work;
