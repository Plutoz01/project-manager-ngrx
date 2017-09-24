import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project.class';
import { ProjectRepositoryService } from '../services/project-repository.service';

@Injectable()
export class ProjectResolver implements Resolve<Project> {

	constructor( private projectService: ProjectRepositoryService ) {}

	resolve( route: ActivatedRouteSnapshot ): Observable<Project> {
		const projectId: number = +route.paramMap.get( 'projectId' );
		return this.projectService.getById( projectId );
	}

}
