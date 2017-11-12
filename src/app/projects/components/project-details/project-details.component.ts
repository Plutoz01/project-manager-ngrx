import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';

import { Project } from '../../models/project.class';
import * as projectActions from '../../store/actions/project.action';
import { ProjectModuleState } from '../../store/state/project.state';
import { getSelectedProjectSelector } from '../../store/selector/project.selector';


@Component( {
	selector: 'pm-project-details',
	templateUrl: './project-details.component.html',
	styleUrls: [ './project-details.component.scss' ]
} )
export class ProjectDetailsComponent implements OnDestroy {
	readonly project$: Observable<Project> = this.store.select( getSelectedProjectSelector )
		.filter( Boolean );

	private onDestroySource = new Subject();

	constructor(
		private route: ActivatedRoute,
		private store: Store<ProjectModuleState>
	) {
		route.params.map( ( params: Params ) => new projectActions.Select( +params.projectId ) )
			.takeUntil( this.onDestroySource )
			.subscribe( store );
	}

	ngOnDestroy() {
		this.onDestroySource.next();
		this.onDestroySource.unsubscribe();

		// TODO: should use effect instead of direct call?
		this.store.dispatch( new projectActions.Loaded( null ) );
	}
}
