import { RouterModule, Routes } from '@angular/router';

import { ProjectStartComponent } from './components/start/start.component';

const routes: Routes = [
	{ path: 'projects',  component: ProjectStartComponent }
];

export const ProjectsRouting = RouterModule.forChild( routes );
