import { ApplicationState } from '../../../store/application-state';
import { Project } from '../../models/project.class';

export interface ProjectState {
	allProjects: Map<number, Project> | null;
	favoriteProjects: Project[] | null;
	selectedProject: Project | null;
}

export interface ProjectModuleState extends ApplicationState {
	projects: ProjectState;
}

export const initialState: ProjectState = {
	allProjects: null,
	favoriteProjects: null,
	selectedProject: null
};


