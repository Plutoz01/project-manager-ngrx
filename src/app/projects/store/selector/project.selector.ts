import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProjectModuleState, ProjectState } from '../state/project.state';
import { Project } from '../../models/project.class';

export const getProjectState = ( state: ProjectModuleState ): ProjectState => state.projects;
export const getProjects = ( state: ProjectState ): Project[] | null => state.allProjects ? Array.from( state.allProjects.values() ) : null;
export const getFavoriteProjects = ( state: ProjectState ): Project[] | null => state.favoriteProjects;

export const getProjectModuleStateSelector = createFeatureSelector<ProjectModuleState>( 'projects' );
export const getProjectStateSelector = createSelector( getProjectModuleStateSelector, getProjectState );
export const getProjectsSelector = createSelector(
	getProjectStateSelector, getProjects
);

export const getFavoriteProjectsSelector = createSelector(
	getProjectStateSelector, getFavoriteProjects
);
