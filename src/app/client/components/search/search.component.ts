import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchText = new EventEmitter<string>();

  search(data: string) {
    this.searchText.emit(data);
  }

}
