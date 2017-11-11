import { INITIAL_STORE_DATA, StoreData } from '../store-data';
import { AllActions, AllActionsType } from '../actions';
import { Project } from '../../projects/models/project.class';

export function storeDateReduce( state: StoreData = INITIAL_STORE_DATA, action: AllActionsType ): StoreData {
	switch ( action.type ) {
		case AllActions.PROJECTS_LOADED_ACTION:
			return { ...state,
				projects: action.projects,
				favoriteProjects: action.projects.filter( ( project: Project ) => project.isFavorite )
			};
		default:
			return state;
	}
}

export const getProjects = ( state: StoreData ) => state.projects;
export const getFavoriteProjects = ( state: StoreData ) => state.favoriteProjects;
