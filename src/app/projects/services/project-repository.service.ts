import { Inject, Injectable, Optional } from '@angular/core';

import { Project } from '../models/project.interface';
import { AbstractInMemoryCrudRepository } from '../../shared/services/AbstractInMemoryCrudRepository.service';

@Injectable()
export class ProjectRepositoryService extends AbstractInMemoryCrudRepository<Project, number> {

	private static nextId = 0;

	constructor( @Inject( 'INITIAL_PROJECTS' ) @Optional() initialProjects: Project[] = [] ) {
		super( initialProjects );
	}

	public generateNewId(): number {
		return ++ProjectRepositoryService.nextId;
	}
}
