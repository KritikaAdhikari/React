import React from "react";
import { Link } from "react-router-dom";



function Project(props  ){

    
    return(
        <div className="card">
            <img className="project-card" src={props.url} alt="project image"/>
            <h2>{props.name}</h2>
            <p className="cause">{props.cause}</p>
            
        <Link to="/donate">
          <button>Donate Now</button>
        </Link>
       
            </div>
        
    );
}

export default Project;

