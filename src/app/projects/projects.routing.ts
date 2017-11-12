import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

import { ProjectStartComponent } from './components/start/start.component';

const routes: Routes = [
	{ path: 'projects', component: ProjectStartComponent },
	{
		path: 'projects/:projectId',
		component: ProjectDetailsComponent
	}
];

export const ProjectsRouting = RouterModule.forChild( routes );
