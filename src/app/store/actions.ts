import { Action } from '@ngrx/store';
import { Project } from '../projects/models/project.class';

export enum AllActions {
	PROJECTS_LOADED_ACTION = 'PROJECTS_LOADED_ACTION'
}

export class ProjectsLoadedAction implements Action {
	readonly type = AllActions.PROJECTS_LOADED_ACTION;

	constructor( public readonly projects: Project[] ) {
	}
}

export type AllActionsType = ProjectsLoadedAction;
