import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  {
    path: 'inicio',
    loadChildren: () => import('./vistas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro-egresos',
    loadChildren: () => import('./vistas/registro-egresos/registro-egresos.module').then( m => m.RegistroEgresosPageModule)
  },
  {
    path: 'registro-usuarios',
    loadChildren: () => import('./vistas/registro-usuarios/registro-usuarios.module').then( m => m.RegistroUsuariosPageModule)
  },
  {
    path: 'listar-usuarios',
    loadChildren: () => import('./vistas/listar-usuarios/listar-usuarios.module').then( m => m.ListarUsuariosPageModule)
  },
  {
    path: 'listar-egresos',
    loadChildren: () => import('./vistas/listar-egresos/listar-egresos.module').then( m => m.ListarEgresosPageModule)
  },
  
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
