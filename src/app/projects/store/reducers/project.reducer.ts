import { Project } from '../../models/project.class';
import { LOAD, LOADED, Loaded, ProjectActionTypes } from '../actions/project.action';
import { initialState, ProjectState } from '../state/project.state';

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
