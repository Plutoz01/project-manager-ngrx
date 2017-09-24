import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../../models/project.class';

@Component( {
	selector: 'pm-project-details',
	templateUrl: './project-details.component.html',
	styleUrls: [ './project-details.component.scss' ]
} )
export class ProjectDetailsComponent {
	readonly project: Project;

	constructor( private route: ActivatedRoute ) {
		this.project = route.snapshot.data[ 'project' ];
	}
}
