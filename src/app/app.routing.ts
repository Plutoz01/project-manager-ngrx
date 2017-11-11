import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/projects', pathMatch: 'full' }
];

export const AppRouting = RouterModule.forRoot(appRoutes);
