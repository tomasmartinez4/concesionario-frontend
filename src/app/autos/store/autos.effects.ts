import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AutosActions from './autos.actions';
import { AutoService } from '../services/auto.service';
import { catchError, map, mergeMap, of } from 'rxjs';


@Injectable()
export class AutosEffects {
  constructor(
    private actions$: Actions,
    private autoService: AutoService
  ) {}

  loadAutos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AutosActions.loadAutos),
      mergeMap(() =>
        this.autoService.getAll().pipe(
          map(autos => AutosActions.loadAutosSuccess({ autos })),
          catchError(err => of(AutosActions.loadAutosFailure({ error: err })))
        )
      )
    )
  );

  createAuto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AutosActions.createAuto),
      mergeMap(({ dto }) =>
        this.autoService.create(dto).pipe(
          map(auto => AutosActions.createAutoSuccess({ auto })),
          catchError(err => of(AutosActions.createAutoFailure({ error: err })))
        )
      )
    )
  );

  updateAuto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AutosActions.updateAuto),
      mergeMap(({ id, dto }) =>
        this.autoService.update(id, dto).pipe(
          map(auto => AutosActions.updateAutoSuccess({ auto })),
          catchError(err => of(AutosActions.updateAutoFailure({ error: err })))
        )
      )
    )
  );
  
  deleteAuto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AutosActions.deleteAuto),
      mergeMap(({ id }) =>
        this.autoService.delete(id).pipe(
          map(() => AutosActions.deleteAutoSuccess({ id })),
          catchError(err => of(AutosActions.deleteAutoFailure({ error: err })))
        )
      )
    )
  );
}
