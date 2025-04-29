import { createAction, props } from '@ngrx/store';
import { AutoDto, CreateAutoDto, UpdateAutoDto } from '../models/auto.model';

export const loadAutos    = createAction('[Autos] Load Autos');
export const loadAutosSuccess = createAction(
  '[Autos] Load Autos Success',
  props<{ autos: AutoDto[] }>()
);
export const loadAutosFailure = createAction(
  '[Autos] Load Autos Failure',
  props<{ error: any }>()
);

export const createAuto = createAction(
  '[Autos] Create Auto',
  props<{ dto: CreateAutoDto }>()
);

export const createAutoSuccess = createAction(
  '[Autos] Create Auto Success',
  props<{ auto: AutoDto }>()
);
export const createAutoFailure = createAction(
  '[Autos] Create Auto Failure',
  props<{ error: any }>()
);

export const updateAuto = createAction(
  '[Autos] Update Auto',
  props<{ id: number; dto: UpdateAutoDto }>()
);
export const updateAutoSuccess = createAction(
  '[Autos] Update Auto Success',
  props<{ auto: AutoDto }>()
);
export const updateAutoFailure = createAction(
  '[Autos] Update Auto Failure',
  props<{ error: any }>()
);

export const deleteAuto = createAction(
  '[Autos] Delete Auto',
  props<{ id: number }>()
);
export const deleteAutoSuccess = createAction(
  '[Autos] Delete Auto Success',
  props<{ id: number }>()
);
export const deleteAutoFailure = createAction(
  '[Autos] Delete Auto Failure',
  props<{ error: any }>()
);
