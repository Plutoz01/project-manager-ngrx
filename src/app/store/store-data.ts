import { Project } from '../projects/models/project.class';

export interface StoreData {
	projects: Project[];
	favoriteProjects: Project[];
}

export const INITIAL_STORE_DATA: StoreData = {
	projects: undefined,
	favoriteProjects: undefined
};
