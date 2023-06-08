interface ShowcaseProjectInfo {
  id: string;
  name: string;
  description: string;
  projectPage: string;
  tools: string[];
  image: string;
}

// type ProjectInfo = Omit<ShowcaseProjectInfo, 'image'>;

interface ProjectInfo {
  id: string;
  name: string;
  description: string;
  demoLink: string;
  repoLink: string;
  tools: string[];
}
