import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { Components } from './components';
import { ProjectsRouting } from './projects.routing';

@NgModule( {
	imports: [
		CommonModule,
		NgbModule,
		AngularFontAwesomeModule,
		ProjectsRouting
	],
	declarations: [
		...Components
	],
	exports: [
		...Components
	]
})
export class ProjectsModule { }
