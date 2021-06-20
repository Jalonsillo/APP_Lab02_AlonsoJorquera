import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service'
@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.page.html',
  styleUrls: ['./listar-usuarios.page.scss'],
})
export class ListarUsuariosPage implements OnInit {
 
datos_obtenidos;
constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
  }
  
ionVieWillEnter(){
  this.obtenerDatosUsuarios()
}

 obtenerDatosUsuarios(){

   this.usuariosService.obtenerRegistroUsuarios().subscribe(
   (response:any)=>{
     this.datos_obtenidos = response.registros;
   },
   error=>{
     alert("error en la peticion")
   }
 )
}
}
