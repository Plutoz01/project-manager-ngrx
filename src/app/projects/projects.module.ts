import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Components } from './components';
import { Services } from './services';
import { ProjectsRouting } from './projects.routing';
import { InitialProjects } from './data/initial/projects.data';

@NgModule( {
	imports: [
		CommonModule,
		NgbModule,
		ProjectsRouting
	],
	declarations: [
		...Components,
	],
	providers: [
		{ provide: 'INITIAL_PROJECTS', useValue: InitialProjects },
		...Services
	],
	exports: [
		...Components
	]
})
export class ProjectsModule { }
