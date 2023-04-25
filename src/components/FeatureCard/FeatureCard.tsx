import Image from 'next/image';
import styles from './FeatureCard.module.css';
import { Space_Mono } from 'next/font/google';

const SpaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

interface FeatureCardProps {
  project: ShowcaseProjectInfo;
}

const FeatureCard = ({ project }: FeatureCardProps) => {
  return (
    <figure className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src="/project-images/ent-app/showcase.gif"
          alt="gif displaying project in action"
          width={627}
          height={359}
        />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.name}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <ul className={`${SpaceMono.className} ${styles.cardTools}`}>
          {project.tools.map((tool) => (
            <p key={tool}>{tool}</p>
          ))}
        </ul>
        <footer className={styles.cardFooter}>
          <p>
            <a
              href={project.repoLink}
              target="_blank"
              aria-label={`link to project repository for ${project.name}`}
              className={SpaceMono.className}
            >
              View Project &#62;
            </a>
          </p>
        </footer>
      </div>
    </figure>
  );
};

export default FeatureCard;
