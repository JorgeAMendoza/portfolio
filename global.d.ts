interface ShowcaseProjectInfo {
  id: string;
  name: string;
  description: string;
  image: string;
  repoLink: string;
  demoLink: string;
  tools: string[];
}

type ProjectInfo = Omit<ShowcaseProjectInfo, 'image'>;
