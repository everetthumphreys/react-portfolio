import React from "react";

function Project(props){
    return (
        <div className="col l4 s12">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={props.src} alt="project-img" />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{props.title}<i
                                className="material-icons right">more_vert</i></span>
                        <p><a href={props.live}>Application</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Code Quiz<i
                                className="material-icons right">close</i></span>
                        <p><a href={props.git}>GitHub</a></p>
                    </div>
                </div>
            </div>
        )
    }
    
export default Project;