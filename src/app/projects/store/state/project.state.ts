import { ApplicationState } from '../../../store/application-state';
import { Project } from '../../models/project.class';

export interface ProjectState {
	projectId: number | null;
	allProjects: Map<number, Project> | null;
	favoriteProjects: Project[] | null;
}

export interface ProjectModuleState extends ApplicationState {
	projects: ProjectState;
}

export const initialState: ProjectState = {
	projectId: null,
	allProjects: null,
	favoriteProjects: null
};


