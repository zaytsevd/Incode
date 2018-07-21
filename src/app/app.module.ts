import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientsListComponent } from './src/client/clients-list/clients-list.component';
import { ClientDetailsComponent } from './client/components/client-details/client-details.component';
import { SearchComponent } from './client/components/search/search.component';
import { ClientShellComponent } from './client/containers/client-shell/client-shell.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    ClientDetailsComponent,
    SearchComponent,
    ClientShellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
