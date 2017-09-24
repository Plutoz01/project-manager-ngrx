import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

import { Components } from './components';
import { InitialProjects } from './data/initial/projects.data';
import { InitialUserStories } from './data/initial/user-stories.data';
import { ProjectsRouting } from './projects.routing';
import { Resolvers } from './resolvers';
import { Services } from './services';

@NgModule( {
	imports: [
		CommonModule,
		ReactiveFormsModule,
		NgbModule,
		ProjectsRouting,
		SharedModule
	],
	declarations: [
		...Components,
	],
	providers: [
		{ provide: 'INITIAL_PROJECTS', useValue: InitialProjects },
		{ provide: 'INITIAL_USER_STORIES', useValue: InitialUserStories },

		...Services,
		...Resolvers
	],
	exports: [
		...Components
	]
} )
export class ProjectsModule {
}
