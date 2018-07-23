import { ClientActions, ClientActionsTypes } from './clientActions';
import { Client } from './../client';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface ClientState {
    clients: Client[];
    selectedClient: Client | null;
    filteredClients: Client[];
    filterString: string;
}

const initialState: ClientState = {
    clients: [],
    selectedClient: null,
    filteredClients: [],
    filterString: ''
};

const getClientsFeatureState = createFeatureSelector<ClientState>('clients');

export const getClients = createSelector(
    getClientsFeatureState,
    state => state.clients
);

export const getSelectedClient = createSelector(
    getClientsFeatureState,
    state => state.selectedClient
);

export const getFilteredClients = createSelector(
    getClientsFeatureState,
    state => state.filteredClients
);

export const getFilterString = createSelector(
    getClientsFeatureState,
    state => state.filterString
);

export function reducer(state = initialState, action: ClientActions): ClientState {
    switch (action.type) {
        case ClientActionsTypes.filterClients:
            const newState = state.clients.filter((client) => {
                const text = action.payload.toLowerCase();
                if (text.length < 3) {
                    return true;
                } else {
                    return client.address.street.toLowerCase().includes(text) ||
                    client.address.city.toLowerCase().includes(text) ||
                    client.address.zipCode.toLowerCase().includes(text) ||
                    client.address.country.toLowerCase().includes(text) ||
                    client.contact.email.toLowerCase().includes(text) ||
                    client.contact.phone.toLowerCase().includes(text) ||
                    client.job.company.toLowerCase().includes(text) ||
                    client.job.title.toLowerCase().includes(text) ||
                    client.general.firstName.toLowerCase().includes(text) ||
                    client.general.lastName.toLowerCase().includes(text);
                }
            });
        return {
            ...state,
            filteredClients: newState
        };
        case ClientActionsTypes.selectClient:
        const newSelecetedState: ClientState = {
            ...state,
            selectedClient: action.payload
        };
        return newSelecetedState;
        // case ClientActionsTypes.loadClients:
        // return {
        //     ...state
        // };
        case ClientActionsTypes.loadClientsSuccess:
        return {
            ...state,
            clients: action.payload,
            filteredClients: action.payload
        };
        case ClientActionsTypes.loadClientsError:
        return {
            ...state
        };
        default:
        return state;
    }
}
