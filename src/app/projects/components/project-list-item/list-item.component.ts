import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Project } from '../../models/project.class';

@Component( {
	selector: 'pm-project-list-item',
	templateUrl: './list-item.component.html',
	styleUrls: [ './list-item.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ProjectListItemComponent {
	@Input() project: Project;

	get progress(): string {
		return this.project.progress.toFixed( 2 );
	}
}
