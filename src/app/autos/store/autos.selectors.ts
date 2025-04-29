import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AutosState } from './autos.reducer';

export const selectAutosState = createFeatureSelector<AutosState>('autos');

export const selectAllAutos    = createSelector(
  selectAutosState,
  (state) => state.list
);

export const selectAutosLoading = createSelector(
  selectAutosState,
  (state) => state.loading
);

export const selectAutosError   = createSelector(
  selectAutosState,
  (state) => state.error
);
