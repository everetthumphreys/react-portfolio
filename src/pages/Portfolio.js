import React from "react";
import Project from "../components/Project"
import Project1 from "../images/code_quiz.png";
import Project2 from "../images/password_generator.png";
import Project3 from "../images/apartment_list.png";
import Project4 from "../images/burger.png";
import Project5 from "../images/employee_summary_engine.png";
import Project6 from "../images/YumTrucks.png";

function Portfolio() {

    return (
        <div className="container">
            {projects.map((project,index) =>{
                return (
                    <Project key={index} src = {project.image} title={project.name} git={project.repo} live={project.live} />
                );
            })}
        </div>
    )
}

const projects = [
    {
        name: "Code Quiz",
        repo: "https://github.com/everetthumphreys/code-quiz",
        live: "https://everetthumphreys.github.io/code-quiz/",
        image: Project1
    },
    {
        name: "Password Generator",
        repo: "https://github.com/everetthumphreys/password-generator/",
        live: "https://everetthumphreys.github.io/password-generator/",
        image: Project2
    },
    {
        name: "Apartment List",
        repo: "https://github.com/everetthumphreys/Property-Hunter",
        live: "https://everetthumphreys.github.io/Property-Hunter/",
        image: Project3
    },
    {
        name: "Burger",
        repo: "https://github.com/everetthumphreys/burger",
        live: "https://dashboard.heroku.com/apps/quiet-fjord-56034",
        image: Project4
    },
    {
        name: "Employee Summary Engine",
        repo: "https://github.com/everetthumphreys/employee-summary-engine",
        live:"https://github.com/everetthumphreys/employee-summary-engine",
        image: Project5
    },
    {
        name: "YumTrucks",
        repo:"https://github.com/K-ai30/YumTrucks",
        live:"https://vast-headland-71725.herokuapp.com/",
        image: Project6
    }
];

export default Portfolio;