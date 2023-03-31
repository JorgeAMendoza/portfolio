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
      <Image
        src={project.image}
        alt="gif displaying project in action"
        width={200}
        height={200}
        className={styles.cardImage}
      />
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
            >
              View Project
            </a>
          </p>
        </footer>
      </div>
    </figure>
  );
};

export default FeatureCard;
