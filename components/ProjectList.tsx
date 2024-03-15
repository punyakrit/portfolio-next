import React from 'react'
import { projectData } from './ProjectData'
import ProjectCard from './ProjectCard'

export default function ProjectList() {
  return (
    <div className="flex flex-wrap justify-center">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              img={project.img} 
              title={project.title}
              githubLink={project.githubLink}
              deployedLink={project.deployedLink}
            />
          ))}
        </div>
  )
}
