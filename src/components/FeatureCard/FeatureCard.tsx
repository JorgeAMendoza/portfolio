import Image from 'next/image';
import styles from './FeatureCard.module.css';
import { Space_Mono } from 'next/font/google';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { shimmer, toBase64 } from '@/lib/shimmer';

const SpaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

interface FeatureCardProps {
  project: ShowcaseProjectInfo;
}

const FeatureCard = ({ project }: FeatureCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  console.log(console.log(project));
  return (
    <li
      className={`${styles.card} ${inView ? styles.cardShow : ''}`}
      ref={ref}
      aria-labelledby={`${project.id}-name`}
    >
      <div className={styles.cardImage}>
        <Image
          src={project.image}
          alt={`gif displaying the ${project.name} project`}
          width={627}
          height={359}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(627, 359)
          )}`}
        />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle} id={`${project.id}-name`}>
          {project.name}
        </h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <ul className={`${SpaceMono.className} ${styles.cardTools}`}>
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <div className={styles.cardFooter}>
          <p>
            <Link
              href={project.projectPage}
              aria-label={`link to project page for ${project.name}`}
              className={SpaceMono.className}
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
