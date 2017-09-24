import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../models/project.class';

@Component( {
	selector: 'pm-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: [ './project-list.component.scss' ]
} )
export class ProjectListComponent {

	@Input() projects: Project[] = [];
	@Output() select = new EventEmitter<Project>();

}
