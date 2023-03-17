import Image from 'next/image';

interface ProjectCardProps {
  project: ProjectInfo;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <figure>
      <div>
        <h3>{project.name}</h3>
        <div>
          <span>
            <a
              href={project.repoLink}
              target="_blank"
              aria-label={`link to github repository for ${project.name}`}
            >
              <Image
                src="/icons/github-icon.svg"
                alt="github icon"
                width={30}
                height={30}
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
                width={30}
                height={30}
              />
            </a>
          </span>
        </div>
      </div>

      <p>{project.description}</p>

      <footer>
        <ul>
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </footer>
    </figure>
  );
};

export default ProjectCard;
