import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Project } from '../../models/project.class';

@Component( {
	selector: 'pm-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: [ './project-list.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger( 'flyIn', [
			state( 'in', style( { transform: 'translateX(0)' } ) ),
			transition( 'void => *', [
				style( { transform: 'translateX(-100%)' } ),
				animate( 100 )
			] )
		] )
	]
} )
export class ProjectListComponent {

	@Input() projects: Project[] = [];
	@Output() select = new EventEmitter<Project>();

}
