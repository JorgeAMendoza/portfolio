import Image from 'next/image';

interface FeatureCardProps {
  project: ShowcaseProjectInfo;
}

const FeatureCard = ({ project }: FeatureCardProps) => {
  return (
    <figure>
      <Image
        src={project.image}
        alt="gif displaying project in action"
        width={100}
        height={100}
      />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ul>
        {project.tools.map((tool) => (
          <p key={tool}>{tool}</p>
        ))}
      </ul>
      <footer>
        <p>
          <a
            href={project.repoLink}
            target="_blank"
            aria-label={`link to project repository for ${project.name}`}
          >
            Code
          </a>
        </p>
        <p>
          <a
            href={project.demoLink}
            target="_blank"
            aria-label={`link to live demo for ${project.name}`}
          >
            Preview
          </a>
        </p>
      </footer>
    </figure>
  );
};

export default FeatureCard;
