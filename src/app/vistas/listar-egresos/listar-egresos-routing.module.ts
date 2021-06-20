import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarEgresosPage } from './listar-egresos.page';

const routes: Routes = [
  {
    path: '',
    component: ListarEgresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarEgresosPageRoutingModule {}
