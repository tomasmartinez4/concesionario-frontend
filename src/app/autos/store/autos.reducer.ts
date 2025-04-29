import { createReducer, on } from '@ngrx/store';
import * as AutosActions from './autos.actions';
import { AutoDto } from '../models/auto.model';

export interface AutosState {
  list: AutoDto[];
  loading: boolean;
  error: any;
}

export const initialState: AutosState = {
  list: [],
  loading: false,
  error: null
};

export const autosReducer = createReducer(
  initialState,

  // Load
  on(AutosActions.loadAutos, state => ({ ...state, loading: true, error: null })),
  on(AutosActions.loadAutosSuccess, (state, { autos }) => ({
    ...state,
    loading: false,
    list: autos
  })),
  on(AutosActions.loadAutosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Create
  on(AutosActions.createAutoSuccess, (state, { auto }) => ({
    ...state,
    list: [...state.list, auto]
  })),
  on(AutosActions.createAutoFailure, (state, { error }) => ({ ...state, error })),

  // Update
  on(AutosActions.updateAutoSuccess, (state, { auto }) => ({
    ...state,
    list: state.list.map(a => (a.id === auto.id ? auto : a))
  })),
  on(AutosActions.updateAutoFailure, (state, { error }) => ({ ...state, error })),

  // Delete
  on(AutosActions.deleteAutoSuccess, (state, { id }) => ({
    ...state,
    list: state.list.filter(a => a.id !== id)
  })),
  on(AutosActions.deleteAutoFailure, (state, { error }) => ({ ...state, error }))
);
