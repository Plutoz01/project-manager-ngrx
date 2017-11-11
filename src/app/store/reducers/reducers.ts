import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { ApplicationState } from '../application-state';
import { getFavoriteProjects, getProjects, storeDateReduce } from './store-data.reducer';
import { uiStateReduce } from './ui-state.reducer';
import { StoreData } from '../store-data';

export const reducers: ActionReducerMap<ApplicationState> = {
	storeData: storeDateReduce,
	uiState: uiStateReduce
};

export const getStoreData = createFeatureSelector<StoreData>( 'storeData' );
export const getProjectsSelector = createSelector(
	getStoreData, getProjects
);

export const getFavoriteProjectsSelector = createSelector(
	getStoreData, getFavoriteProjects
);
