import Image from 'next/image';

const ProjectCard = () => {
  return (
    <figure>
      <div>
        <h3>Project Name</h3>
        <div>
          <span>
            <a
              href="repo.com"
              target="_blank"
              aria-label="link to github repository for project name"
            >
              <Image
                src={'image source'}
                alt="github icon"
                width={30}
                height={30}
              />
            </a>
          </span>
          <span>
            <a
              href="repo.com"
              target="_blank"
              aria-label="link to project preview for project name"
            >
              <Image
                src={'image source'}
                alt="link icon"
                width={30}
                height={30}
              />
            </a>
          </span>
        </div>
      </div>

      <p>project description</p>

      <footer>
        <ul>
          <li>example</li>
          <li>of</li>
          <li>tech used</li>
        </ul>
      </footer>
    </figure>
  );
};

export default ProjectCard;
