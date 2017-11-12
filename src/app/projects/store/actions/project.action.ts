import { Action } from '@ngrx/store';
import { Project } from '../../models/project.class';

export const LOAD = 'LOAD';
export const LOADED = 'LOADED';
export const SELECT = 'SELECT';

export class Load implements Action {
	readonly type = LOAD;
}

export class Loaded implements Action {
	readonly type = LOADED;

	constructor( public readonly projects: Project[] ) {
	}
}

export class Select implements Action {
	readonly type = SELECT;
}

export type ProjectActionTypes = Load | Loaded | Select;
