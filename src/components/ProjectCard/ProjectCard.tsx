import { spaceMono } from '@/utils/fonts';
import { useInView } from 'react-intersection-observer';
import { GitHubIcon } from '../Icons';
import styles from './project-card.module.css';

interface ProjectCardProps {
  project: ProjectInfo;
  index: number;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  return (
    <li
      ref={ref}
      className={`${styles.projectCardContainer} ${
        inView ? styles.projectCardContainerShow : ''
      }`}
      aria-labelledby={`${project.id}-name`}
    >
      <div className={styles.projectCard}>
        <div className={styles.projectTitle}>
          <h3>
            {project.demoLink ? (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`link to the live demo of the ${project.name} project`}
                id={`${project.id}-name`}
              >
                {project.name}
              </a>
            ) : (
              <span id={`${project.id}-name`}>{project.name}</span>
            )}
          </h3>
          <div className={styles.projectLinks}>
            <span>
              <a
                href={project.repoLink}
                target="_blank"
                aria-label={`link to github repository for ${project.name}`}
              >
                <GitHubIcon />
              </a>
            </span>
          </div>
        </div>

        <div>
          <p>{project.description}</p>
        </div>

        <footer className={styles.projectFooter}>
          <ul className={`${styles.projectTools} ${spaceMono.className}`}>
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </footer>
      </div>
    </li>
  );
};

export default ProjectCard;
