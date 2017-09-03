import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Project } from '../../models/project.interface';
import { ProjectRepositoryService } from '../../services/project-repository.service';

export interface SearchResult {
	id: number;
	label: string;
}

@Component({
	selector: 'pm-start',
	templateUrl: './start.component.html',
	styleUrls: ['./start.component.scss']
})
export class ProjectStartComponent {

	recentProjects$: Observable<Project[]>;

	constructor(
		private router: Router,
		private projectRepositoryService: ProjectRepositoryService
	) {
		this.recentProjects$ = projectRepositoryService.getAll();
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

	onProjectSelect( projectId: number ) {
		this.router.navigate( [ '/projects', projectId ] );
	}

}
