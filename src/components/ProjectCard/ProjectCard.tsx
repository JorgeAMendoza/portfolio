import styles from './project-card.module.css';
import { Space_Mono } from 'next/font/google';
import { useInView } from 'react-intersection-observer';
import { GitHubIcon, LinkIcon } from '../Icons';

const SpaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

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
    >
      <div className={styles.projectCard}>
        <div className={styles.projectTitle}>
          <h3>
            <a
              href={project.demoLink}
              target="_blank"
              aria-label={`link to project preview for ${project.name}`}
              rel="noreferrer"
            >
              {project.name}
            </a>
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
          <ul className={`${styles.projectTools} ${SpaceMono.className}`}>
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
