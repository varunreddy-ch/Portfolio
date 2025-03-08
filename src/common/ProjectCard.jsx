import React from 'react'

function ProjectCard({src, link, title, desc}) {
  return (
      <a href={link} target="_blank">
                <img className='hover' src={src} alt="Project1Logo" />
                <h3>{title}</h3>
                <p>{desc}</p>
            </a>
  )
}

export default ProjectCard
