import React from 'react';
import ProjectCard from '../Cards'
import projects from '../../projects.json'


function Wrapper(props) {
    return <div className="wrapper space-between">{props.children}</div>;
}

function Portfolio() {

    return (
        <div>
            <div>
                <h1 className="text-center portfolio-title">It's been a hard days night...</h1>
            </div>

            <Wrapper >
                {projects.map((project) => (
                    <ProjectCard key={project.id} name={project.name} image={project.image} description={project.description} skills={project.skills} github={project.github} deploy={project.deploy}/>
                ))}
            </Wrapper>
        </div>
    );
}

export default Portfolio;