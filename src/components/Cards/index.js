import React from 'react';

//individual project card layout using props
function Cards(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="card-content">
                <p className='card-title'>{props.name}</p>
                <p>{props.description}</p>
                <p>{props.skills}</p>
                <p>
                    <a href={props.github} target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/48/github.png" alt="Repository" id="project-icon"/></a> 
                    <a href={props.deploy} target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/48/monitor.png" alt="Deployed Site" id="project-icon"/></a> 
                </p>
            </div>
        </div>
    )
}

export default Cards