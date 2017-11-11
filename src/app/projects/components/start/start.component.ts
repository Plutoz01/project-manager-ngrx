import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Project } from '../../models/project.class';
import { ProjectRepositoryService } from '../../services/project-repository.service';
import { ApplicationState } from '../../../store/application-state';
import { ProjectsLoadedAction } from '../../../store/actions';
import { getFavoriteProjectsSelector, getProjectsSelector } from '../../../store/reducers/reducers';

export interface SearchResult {
	id: number;
	label: string;
}

@Component({
	selector: 'pm-start',
	templateUrl: './start.component.html',
	styleUrls: ['./start.component.scss']
})
export class ProjectStartComponent implements OnInit {

	recentProjects$: Observable<Project[]>;
	favoriteProjects$: Observable<Project[]>;

	constructor(
		private router: Router,
		private projectRepositoryService: ProjectRepositoryService,
		private store: Store<ApplicationState>
	) {
		this.recentProjects$ = this.store.select( getProjectsSelector )
			.filter( Boolean );
		this.favoriteProjects$ = this.store.select( getFavoriteProjectsSelector )
			.filter( Boolean );
	}

	ngOnInit() {
		this.projectRepositoryService.getAll().first().subscribe(
			( projects: Project[] ) => {
				this.store.dispatch( new ProjectsLoadedAction( projects ) );
			}
		);
	}

	onSearch = (text: Observable<string>) => {
		return text
			.debounceTime(300)
			.distinctUntilChanged()
			.map((term: string) => {
				return [
					{ id: 1, label: term + ' 1' } as SearchResult,
					{ id: 2, label: term + ' 2' } as SearchResult,
					{ id: 3, label: term + ' 3' } as SearchResult,
					{ id: 4, label: term + ' 4' } as SearchResult
				];
			});
	}

	onSearchResultSelect( selectEvent: NgbTypeaheadSelectItemEvent ) {
		const selectedResult = selectEvent.item as SearchResult;
		console.log( 'onSearchResultSelect: ', selectedResult );
	}

	onProjectSelect( project: Project ) {
		this.router.navigate( [ '/projects', project.id ] );
	}

}
