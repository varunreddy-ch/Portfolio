import React from 'react';
import ProjectImage from '../../../public/images.png'
import styles from "./ProjectsStyles.module.css"
import ProjectCard from '../../common/ProjectCard';

function Projects() {
    return <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            {/* Project 1 */}
            <div className={styles.projectsContainer}>
                <ProjectCard
                src={ProjectImage}
                link={"www.google.com"}
                title="Project 1"
                desc="Project desc"
                />
            </div>
            {/* Project 2 */}
            <div className={styles.projectsContainer}>
                <ProjectCard
                src={ProjectImage}
                link={"www.google.com"}
                title="Project 2"
                desc="Project desc"
                />
            </div>
            {/* Project 3 */}
            <div className={styles.projectsContainer}>
                <ProjectCard
                src={ProjectImage}
                link={"www.google.com"}
                title="Project 3"
                desc="Project desc"
                />
            </div>
            {/* Project 4 */}
            <div className={styles.projectsContainer}>
                <ProjectCard
                src={ProjectImage}
                link={"www.google.com"}
                title="Project 4"
                desc="Project desc"
                />
            </div>
            {/* Project 5 */}
            <div className={styles.projectsContainer}>
                <ProjectCard
                src={ProjectImage}
                link={"www.google.com"}
                title="Project 5"
                desc="Project desc"
                />
            </div>
        </div>
    </section>
}

export default Projects;