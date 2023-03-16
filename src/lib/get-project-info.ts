import showcaseProjects from '../utils/project-showcase.json';
import { nanoid } from 'nanoid';
export const getShowcaseInfo = (): ShowcaseProjectInfo[] => {
  return showcaseProjects.map((project) => ({
    id: nanoid(),
    ...project,
  }));
};
