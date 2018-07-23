import { Client } from './../client';
import { Action } from '@ngrx/store';

export enum ClientActionsTypes {
    loadClients = '[Clients] load',
    loadClientsSuccess = '[Clients] load success',
    loadClientsError = '[Clients] load error',
    filterClients = '[Clients] Filter',
    selectClient = '[Clients] select'
}

export class ClientLoad implements Action {
    readonly type =  ClientActionsTypes.loadClients;
}
export class ClientLoadSuccess implements Action {
    readonly type = ClientActionsTypes.loadClientsSuccess;
    constructor(public payload: Client[]) {}
}
export class ClientLoadError implements Action {
    readonly type = ClientActionsTypes.loadClientsError;
    constructor(public payload: string) {}
}

export class ClientFilter implements Action {
    readonly type = ClientActionsTypes.filterClients;
    constructor(public payload: string) {}
}

export class ClientSelect implements Action {
    readonly type = ClientActionsTypes.selectClient;
    constructor(public payload: Client) {}
}

export type ClientActions = ClientLoad | ClientLoadSuccess| ClientLoadError | ClientFilter | ClientSelect;
