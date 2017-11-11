import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getFavoriteProjects, getProjects, getProjectState, projectReducer, ProjectModuleState } from './project.reducer';

export const reducers = {
	projects: projectReducer
};

export const getProjectModuleState = createFeatureSelector<ProjectModuleState>( 'projects' );
export const getProjectStateSelector = createSelector( getProjectModuleState, getProjectState );
export const getProjectsSelector = createSelector(
	getProjectStateSelector, getProjects
);

export const getFavoriteProjectsSelector = createSelector(
	getProjectStateSelector, getFavoriteProjects
);
