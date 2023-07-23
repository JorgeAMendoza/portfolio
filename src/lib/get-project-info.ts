import showcaseProjects from '../utils/project-showcase.json';
import projects from '../utils/project-information.json';
export const getShowcaseInfo = (): ShowcaseProjectInfo[] => {
  return showcaseProjects.map((project) => ({
    ...project,
  }));
};

export const getProjectInfo = (): ProjectInfo[] => {
  return projects.map((project) => ({ ...project }));
};
