import { Observable } from 'rxjs';
import { Client } from './../../client';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-client-shell',
  templateUrl: './client-shell.component.html',
  styleUrls: ['./client-shell.component.scss']
})
export class ClientShellComponent implements OnInit {
  clients$: Observable<Client[]>;
  client: Client;

  constructor(private clientService: ClientService) { }

  clientSelected(client: Client) {
    this.client = client;
  }

  ngOnInit() {
    this.clients$ = this.clientService.getClients();
    console.log(this.clients$);
  }

}
