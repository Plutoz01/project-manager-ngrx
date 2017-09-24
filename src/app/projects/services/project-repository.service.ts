import { Inject, Injectable, Optional } from '@angular/core';

import { Project } from '../models/project.class';
import { AbstractInMemoryCrudRepository } from '../../shared/services/AbstractInMemoryCrudRepository.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectRepositoryService extends AbstractInMemoryCrudRepository<Project, number> {

	private static nextId = 0;

	constructor( @Inject( 'INITIAL_PROJECTS' ) @Optional() initialProjects: Project[] = [] ) {
		super( initialProjects );
	}

	public generateNewId(): number {
		return ++ProjectRepositoryService.nextId;
	}

	public getFavorites(): Observable<Project[]> {
		return this.getAll().map( ( projects: Project[] ) => projects.filter( ( project: Project ) => project.isFavorite ) );
	}
}
