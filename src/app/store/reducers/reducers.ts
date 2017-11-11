import { ActionReducerMap } from '@ngrx/store';

import { ApplicationState } from '../application-state';
import { uiStateReduce } from './ui-state.reducer';

export const reducers: ActionReducerMap<ApplicationState> = {
	uiState: uiStateReduce
};
