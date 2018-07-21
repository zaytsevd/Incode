import { Client } from './../../client';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent {
  @Input() clients: Client[];
  @Output() selected = new EventEmitter<Client>();

  select(client: Client) {
    this.selected.emit(client);
    console.log(client);
  }
}
