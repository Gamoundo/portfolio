import React from 'react'



const tech= [
    {
        name:"React",
        image:"./React.png"
    },
    {
        name:"Css",
        image:"./Css.png"
    },
    {
        name:"Javascript",
        image:"./javascript.png"
    }
]

const displayTech = (array) => {
    return (array.map((element) => {
        return(
            <div className="project">
                <h3> {element.name}</h3>
                <img src={element.image} alt={element.name} width="200" height="200" />
                
            </div>
        )
    }
    )

    )
}




function Tech() {
    return (
        <div className="projectContainer"> {displayTech(tech)} </div>
    )
}

export default Tech;