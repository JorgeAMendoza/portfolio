interface ShowcaseProjectInfo {
  id: string;
  name: string;
  description: string;
  projectPage: string;
  tools: string[];
  video: {
    mp4: string;
    webm: string;
    poster: string;
  };
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
