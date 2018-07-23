import { ClientEffects } from './state/clientEffects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { SearchComponent } from './components/search/search.component';
import { ClientShellComponent } from './containers/client-shell/client-shell.component';
import { reducer } from './state/clientReducer';

const clientRoutes: Routes = [
  { path: '', component: ClientShellComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(clientRoutes),
    StoreModule.forFeature('clients', reducer),
    EffectsModule.forFeature(
      [ ClientEffects ]
    ),
  ],
  declarations: [
    SearchComponent,
    ClientShellComponent,
    ClientsListComponent,
    ClientDetailsComponent
  ]
})
export class ClientModule { }
