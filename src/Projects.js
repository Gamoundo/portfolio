import React from 'react';


const apps = [
    {
        name: "Poetry Project",
        desc: "An app focused on letting people express themselves.",
        link: "https://github.com/Gamoundo/poem-project"
    },
    {
        name: "Orator",
        desc: "A game designed to make you more comfortable with talking.",
        link: "https://github.com/Gamoundo/improv"

    }
]

const displayApps = (array) => {
    return (array.map((element) => {
        return(
            <div className="project">
                <h3> {element.name}</h3>
                <p> {element.desc}</p>
                <a href={element.link}> {element.name}'s website</a>
            </div>
        )
    }
    )

    )
}


function Projects() {

    return(
        <div className="projectContainer"> {displayApps(apps)} </div>
    )
}

export default Projects;