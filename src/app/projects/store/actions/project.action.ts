import { Action } from '@ngrx/store';
import { Project } from '../../models/project.class';

export const LOAD_ALL = 'LOAD_ALL';
export const ALL_LOADED = 'ALL_LOADED';
export const SELECT = 'SELECT';
export const LOADED = 'LOADED';

export class LoadAll implements Action {
	readonly type = LOAD_ALL;
}

export class AllLoaded implements Action {
	readonly type = ALL_LOADED;

	constructor( public readonly projects: Project[] ) {
	}
}

export class Select implements Action {
	readonly type = SELECT;

	constructor( public readonly projectId: number ) {
	}
}

export class Loaded implements Action {
	readonly type = LOADED;

	constructor( public readonly project: Project ) {
	}
}

export type ProjectActionTypes = LoadAll | AllLoaded | Select | Loaded;
