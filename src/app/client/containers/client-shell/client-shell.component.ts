import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Client } from './../../client';
import * as ClientReducer from './../../state/clientReducer';
import * as ClientActions from '../../state/clientActions';

@Component({
  selector: 'app-client-shell',
  templateUrl: './client-shell.component.html',
  styleUrls: ['./client-shell.component.scss']
})
export class ClientShellComponent implements OnInit {
  clients$: Observable<Client[]>;
  client$: Observable<Client>;

  constructor(private store: Store<ClientReducer.ClientState>) {  }

  clientSelected(client: Client) {
    this.store.dispatch(new ClientActions.ClientSelect(client));
  }

  runSearch(data: string) {
    this.store.dispatch(new ClientActions.ClientFilter(data));
  }

  ngOnInit() {
    this.store.dispatch(new ClientActions.ClientLoad());
    this.clients$ = this.store.pipe(select(ClientReducer.getFilteredClients));
    this.client$ = this.store.pipe(select(ClientReducer.getSelectedClient));
  }

}
