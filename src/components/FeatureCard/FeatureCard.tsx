import Image from 'next/image';
import styles from './FeatureCard.module.css';
import { Space_Mono } from 'next/font/google';
import Link from 'next/link';

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
          src={project.image}
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
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <footer className={styles.cardFooter}>
          <p>
            <Link
              href={project.projectPage}
              target="_blank"
              aria-label={`link to project page for ${project.name}`}
              className={SpaceMono.className}
            >
              View Project &#62;
            </Link>
          </p>
        </footer>
      </div>
    </figure>
  );
};

export default FeatureCard;
