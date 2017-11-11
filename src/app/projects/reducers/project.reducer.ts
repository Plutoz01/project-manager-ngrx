import { Project } from '../models/project.class';
import { LOAD, LOADED, ProjectActionTypes } from '../actions/project.action';
import { ApplicationState } from '../../store/application-state';

export interface ProjectState {
	projectId: number | null;
	allProjects: Project[] | null;
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

export function projectReducer( state = initialState, action: ProjectActionTypes ): ProjectState {
	switch ( action.type ) {
		case LOADED:
			return {
				...state,
				allProjects: [ ...action.projects ],
				favoriteProjects: action.projects.filter( ( project: Project ) => project.isFavorite )
			};
		case LOAD: // used for effect
		default:
			return state;
	}
}

export const getProjectState = ( state: ProjectModuleState ) => state.projects;
export const getProjects = ( state: ProjectState ) => state.allProjects;
export const getFavoriteProjects = ( state: ProjectState ) => state.favoriteProjects;
