import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ProjectRepositoryService } from '../services/project-repository.service';
import * as projectActions from '../actions/project.action';
import { Project } from '../models/project.class';

@Injectable()
export class ProjectEffects {

	@Effect()
	loadAll$: Observable<Action> = this.actions$
		.ofType<projectActions.Load>( projectActions.LOAD )
		.switchMap( () =>
			this.projectRepositoryService.getAll().first()
		).map( ( projects: Project[] ) => new projectActions.Loaded( projects ) );

	constructor(
		private actions$: Actions,
		private projectRepositoryService: ProjectRepositoryService ) {
	}
}
