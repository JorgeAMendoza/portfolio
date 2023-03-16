import Image from 'next/image';

const FeatureCard = () => {
  return (
    <figure>
      <Image
        src="project.gif"
        alt="gif displaying project in action"
        width={30}
        height={30}
      />
      <h3>Project Title</h3>
      <p>project description</p>
      <div>
        <Image src="icon" alt="name of icon" width={30} height={30} />
        <Image src="icon" alt="name of icon" width={30} height={30} />
        <Image src="icon" alt="name of icon" width={30} height={30} />
      </div>
      <footer>
        <p>
          <a
            href="repo.com"
            target="_blank"
            aria-label="link to github repository for project name"
          >
            Code
          </a>
        </p>
        <p>
          <a
            href="repo.com"
            target="_blank"
            aria-label="live preview for project name"
          >
            Preview
          </a>
        </p>
      </footer>
    </figure>
  );
};

export default FeatureCard;
