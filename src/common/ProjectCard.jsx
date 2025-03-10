import React from 'react';
import Styles from './ProjectCard.module.css';

function ProjectCard({src, link, title, desc}) {
  return (
    <div className={Styles.projectCoontainer}>
        <a href={link} target="_blank">
            <img className='hover' src={src} alt="Project1Logo" />
            <h3 className={Styles.h3}>{title}</h3>
            <p>{desc}</p>
        </a>  
    </div>
      
  )
}

export default ProjectCard
