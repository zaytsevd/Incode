import { Action } from '@ngrx/store';
import * as ClientActions from './clientActions';
import { Observable, of } from 'rxjs';
import { ClientService } from './../client.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class ClientEffects {
    constructor(private clientService: ClientService, private actions$: Actions) {}

    @Effect()
    loadClients$: Observable<Action> = this.actions$.pipe(
        ofType(ClientActions.ClientActionsTypes.loadClients),
        mergeMap(action =>
        this.clientService.getClients().pipe(
            map(clients => (new ClientActions.ClientLoadSuccess(clients))),
            catchError(err => of(new ClientActions.ClientLoadError(err)))
        ))
    );
}
