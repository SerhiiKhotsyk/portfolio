import styles from './Projects.module.css';
import project1 from '../../assets/images/projects/project-1.jpg';
import project2 from '../../assets/images/projects/project-2.jpg';
import project3 from '../../assets/images/projects/project-3.jpg';
import project4 from '../../assets/images/projects/project-4.jpg';
import project5 from '../../assets/images/projects/project-5.jpg';
import project6 from '../../assets/images/projects/project-6.jpg';
import Project from './Project/Project';

const projects = [
  { title: 'Project Tile goes here', img: project1, linkPreview: '#', linkGithub: '#', stack: 'HTML , JavaScript, SASS, React', descr: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content random things are here in description This is sample project lorem ipsum generator for dummy content e in description This is sample project lorem ipsum generator for dummy content e in description This is sample project lorem ipsum generator for dummy content', },
  { title: 'Project Tile goes here', img: project2, linkPreview: '#', linkGithub: '#', stack: 'HTML , JavaScript, SASS, React', descr: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content description This is sample project lorem ipsum generator for dummy content e in description This is sample project lorem ipsum generator for dummy content e in description This is sample project lorem', },
  { title: 'Project Tile goes here', img: project3, linkPreview: '#', linkGithub: '#', stack: 'HTML , JavaScript, SASS, React', descr: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content scription This is sample project lorem ipsum', },
  { title: 'Project Tile goes here', img: project4, linkPreview: '#', linkGithub: '#', stack: 'HTML , JavaScript, SASS, React', descr: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content', },
  { title: 'Project Tile goes here', img: project5, linkPreview: '#', linkGithub: '#', stack: 'HTML , JavaScript, SASS, React', descr: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content scription This is sample project lorem ipsum rator for dummy content scription This is s ', },
  { title: 'Project Tile goes here', img: project6, linkPreview: '#', linkGithub: '#', stack: 'HTML , JavaScript, SASS, React', descr: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content scription This is sample project lorem ipsum', },
]

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h5>projects<span>()</span></h5>
      <div className={styles.projects__container}>
        {projects.map(project => <Project project={project} />)}
      </div>
    </section>
  );
}

export default Projects;