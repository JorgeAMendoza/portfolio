import Image from 'next/image';
import styles from './ProjectCard.module.css';
import { Space_Mono } from 'next/font/google';

const SpaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

interface ProjectCardProps {
  project: ProjectInfo;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <figure className={styles.projectCard}>
      <div className={styles.projectTitle}>
        <h3>{project.name}</h3>
        <div className={styles.projectLinks}>
          <span>
            <a
              href={project.repoLink}
              target="_blank"
              aria-label={`link to github repository for ${project.name}`}
            >
              <Image
                src="/icons/github-icon.svg"
                alt="github icon"
                width={25}
                height={25}
              />
            </a>
          </span>
          <span>
            <a
              href={project.demoLink}
              target="_blank"
              aria-label={`link to project preview for ${project.name}`}
            >
              <Image
                src="/icons/link-icon.svg"
                alt="link icon"
                width={25}
                height={25}
              />
            </a>
          </span>
        </div>
      </div>

      <p>{project.description}</p>

      <footer className={styles.projectFooter}>
        <ul className={`${styles.projectTools} ${SpaceMono.className}`}>
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </footer>
    </figure>
  );
};

export default ProjectCard;
