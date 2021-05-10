import React from 'react';

function Project() {
    /* An image of the deployed application (either a GIF or a screenshot)*/
    /*The title of the project*/
    /*A link to the deployed application*/
    /* link to the corresponding GitHub repository */

    const projects = [
        {title: "CA NPS", image: "", link: "", git: ""},
        {title: "Pets R Us", image: "", link: "", git: ""},
        {title: "Weather Dashboard", image: "", link: "", git: ""},
        {title: "Tech Blog", image: "", link: "", git: ""}
    ]
    return (
      <section >

        <ul className="list-group">
        {projects.map((project) => (
              <li className="list-group-item" key={project.title}>
              <img
                src={project.image}
                alt={project.title}
                className="img-thumbnail mx-1"/>
                <a href={project.link}></a>
                <a href={project.git}></a>
              </li>
            ))}
        </ul>

      </section>
    );
  }
  
  export default Project;