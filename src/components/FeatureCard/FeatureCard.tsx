import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import styles from './FeatureCard.module.css';
import { spaceMono } from '@/utils/fonts';

interface FeatureCardProps {
  project: ShowcaseProjectInfo;
}

const FeatureCard = ({ project }: FeatureCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  return (
    <li
      className={`${styles.card} ${inView ? styles.cardShow : ''}`}
      ref={ref}
      aria-labelledby={`${project.id}-name`}
    >
      <div className={styles.cardVideo}>
        <video loop autoPlay muted poster={project.video.poster} preload="auto">
          <source src={project.video.webm} type="video/webm" />
          <source src={project.video.mp4} type="video/mp4" />
          <p>Video is not supported on your browser.</p>
        </video>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle} id={`${project.id}-name`}>
          {project.name}
        </h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <ul className={`${spaceMono.className} ${styles.cardTools}`}>
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <div className={styles.cardFooter}>
          <p>
            <Link
              href={project.projectPage}
              aria-label={`link to project page for ${project.name}`}
              className={spaceMono.className}
            >
              View Project &#62;
            </Link>
          </p>
        </div>
      </div>
    </li>
  );
};

export default FeatureCard;
