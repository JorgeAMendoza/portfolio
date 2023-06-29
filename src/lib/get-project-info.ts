import showcaseProjects from '../utils/project-showcase.json';
import projects from '../utils/project-information.json';
import { nanoid } from 'nanoid';
export const getShowcaseInfo = (): ShowcaseProjectInfo[] => {
  return showcaseProjects.map((project) => ({
    id: nanoid(),
    ...project,
  }));
};

export const getProjectInfo = (): ProjectInfo[] => {
  return projects.map((project) => ({ id: nanoid(), ...project }));
};
