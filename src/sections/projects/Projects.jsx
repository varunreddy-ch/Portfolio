import React from 'react';
import ProjectImage from '../../../public/images.png'
import RAG from '../../../public/RAG.png'
import VehicleCountingDetection from '../../../public/VehicleCountingDetection.png'
import filterPruning from '../../../public/filterPruning.png'
import puzzleSolver from '../../../public/puzzleSolver.png'
import FraudDetection from '../../../public/FraudDetection.png'
import styles from "./ProjectsStyles.module.css"
import ProjectCard from '../../common/ProjectCard';

function Projects() {
    return <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            {/* Project 1 */}
            <div className={styles.projectsContainer1}>
                <ProjectCard
                src={RAG}
                link={"https://github.com/varunreddy-ch/Local-RAG-SYSTEM-using-DeepSeek"}
                title="Local RAG System using DeepSeek"
                desc="An advanced Retrieval-Augmented Generation (RAG) system leveraging DeepSeek, WhisperX, FAISS, BM25, and Knowledge Graphs for enhanced document-based question answering."
                />
            </div>
            {/* Project 2 */}
            <div className={styles.projectsContainer1}>
                <ProjectCard
                src={VehicleCountingDetection}
                link={"https://github.com/varunreddy-ch/Vehicle-Counting-and-Classification"}
                title="Vehicle Counting & Classification"
                desc="A real-time vehicle detection, tracking, and classification system using YOLOv3 and OpenCV, leveraging background subtraction and Euclidean distance tracking."
                />
            </div>
            {/* Project 3 */}
            <div className={styles.projectsContainer1}>
                <ProjectCard
                src={filterPruning}
                link={"https://github.com/varunreddy-ch/filter-pruning-in-VGG16"}
                title="Filter Pruning in VGG16"
                desc="A study on applying filter pruning methods to the VGG16 architecture, aiming to enhance computational efficiency without significant accuracy loss."
                />
            </div>
            {/* Project 4 */}
            <div className={styles.projectsContainer1}>
                <ProjectCard
                src={puzzleSolver}
                link={"https://github.com/varunreddy-ch/jigsaw-puzzle-solver"}
                title="Jigsaw Puzzle Solver"
                desc="Leverages AI and computer vision to analyze puzzle piece shapes and features, identifying matching edges to automate assembly, demonstrating AI's potential in solving complex visual challenges."
                />
            </div>
            {/* Project 5 */}
            <div className={styles.projectsContainer1}>
                <ProjectCard
                src={FraudDetection}
                link={"https://github.com/varunreddy-ch/Fraud-Prediction-in-Transactions"}
                title="Fraud Prediction in Transactions"
                desc="Developed a predictive model using scikit-learn classification algorithms on a Kaggle dataset, achieving up to 99.96% accuracy in detecting fraudulent mobile money transactions."
                />
            </div>
        </div>
    </section>
}

export default Projects;
