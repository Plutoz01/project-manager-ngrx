import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';

import { Components } from './components';
import { InitialProjects } from './data/initial/projects.data';
import { InitialUserStories } from './data/initial/user-stories.data';
import { ProjectsRouting } from './projects.routing';
import { Services } from './services';
import { reducers } from './store/reducers';
import { Effects } from './store/effects';

@NgModule( {
	imports: [
		CommonModule,
		ReactiveFormsModule,
		NgbModule,
		ProjectsRouting,
		StoreModule.forFeature( 'projects', reducers ),
		EffectsModule.forFeature( Effects ),
		SharedModule
	],
	declarations: [
		...Components,
	],
	providers: [
		{ provide: 'INITIAL_PROJECTS', useValue: InitialProjects },
		{ provide: 'INITIAL_USER_STORIES', useValue: InitialUserStories },

		...Services,
	],
	exports: [
		...Components
	]
} )
export class ProjectsModule {
}
