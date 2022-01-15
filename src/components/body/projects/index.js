import React from "react";
import Seperator from "../../common/seperator";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./project-card";
import "./projects.css";
const Projects = () => {
  const data = ProjectData;
  return (
    <div className='projects'>
      <Seperator />
      <label className='section-title'> Projects</label>
      <div>
        {data.map((item) => {
          return <ProjectCard project={item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
