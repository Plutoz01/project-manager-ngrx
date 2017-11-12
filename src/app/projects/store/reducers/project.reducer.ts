import { Project } from '../../models/project.class';
import { LOAD_ALL, ALL_LOADED, AllLoaded, ProjectActionTypes, SELECT, LOADED, Loaded } from '../actions/project.action';
import { initialState, ProjectState } from '../state/project.state';

export function projectReducer( state = initialState, action: ProjectActionTypes ): ProjectState {
	switch ( action.type ) {
		case ALL_LOADED:
			return handleAllProjectsLoaded( state, action );
		case LOADED:
			return handleProjectLoaded( state, action );
		case SELECT: // used for effect
		case LOAD_ALL: // used for effect
		default:
			return state;
	}
}

function handleAllProjectsLoaded( state: ProjectState, action: AllLoaded ): ProjectState {
	const projectsMap: Map<number, Project> = new Map(
		action.projects.map( ( project: Project ): [number, Project] => [ project.id, project ] )
	);
	return {
		...state,
		allProjects: projectsMap,
		favoriteProjects: action.projects.filter( ( project: Project ) => project.isFavorite )
	};
}

function handleProjectLoaded( state: ProjectState, action: Loaded ): ProjectState {
	return {
		...state,
		selectedProject: action.project
	};
}
