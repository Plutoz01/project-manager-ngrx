import { Component } from '@angular/core';
import { Project } from '../../models/project.interface';
import { InitialProjects } from '../../data/initial/projects.data';

@Component( {
	selector: 'pm-project-details',
	templateUrl: './project-details.component.html',
	styleUrls: [ './project-details.component.scss' ]
} )
export class ProjectDetailsComponent {
	project: Project = InitialProjects[ 0 ];
}
