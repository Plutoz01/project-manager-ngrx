import { Project } from '../models/project.class';
import { LOAD, LOADED, Loaded, ProjectActionTypes } from '../actions/project.action';
import { ApplicationState } from '../../store/application-state';

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

export function projectReducer( state = initialState, action: ProjectActionTypes ): ProjectState {
	switch ( action.type ) {
		case LOADED:
			return handleProjectsLoaded( state, action );
		case LOAD: // used for effect
		default:
			return state;
	}
}

function handleProjectsLoaded( state: ProjectState, action: Loaded ): ProjectState {
	const projectsMap: Map<number, Project> = new Map(
		action.projects.map( ( project: Project ): [number, Project] => [ project.id, project ] )
	);
	return {
		...state,
		allProjects: projectsMap,
		favoriteProjects: action.projects.filter( ( project: Project ) => project.isFavorite )
	};
}

export const getProjectState = ( state: ProjectModuleState ): ProjectState => state.projects;
export const getProjects = ( state: ProjectState ): Project[] | null => state.allProjects ? Array.from( state.allProjects.values() ) : null;
export const getFavoriteProjects = ( state: ProjectState ): Project[] | null => state.favoriteProjects;
