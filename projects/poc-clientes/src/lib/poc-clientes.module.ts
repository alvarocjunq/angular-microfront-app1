import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaComponent } from './ficha/ficha.component';
import { MaterialModule } from './material-module';
import { PocClientesComponent } from './poc-clientes.component';
import { SearchListComponent } from './search-list/search-list.component';


const routes: Routes = [
  { path: 'home', children: [{ path: '', component: SearchListComponent, outlet: 'poc-poc-clientes' }] },
  { path: 'ficha', children: [{ path: '', component: FichaComponent, outlet: 'poc-poc-clientes' }] }
];

@NgModule({
  declarations: [PocClientesComponent, SearchListComponent, FichaComponent],
  imports: [
    MaterialModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [PocClientesComponent],
})
export class PocClientesModule { }
