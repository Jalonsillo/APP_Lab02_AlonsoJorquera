import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../servicios/usuarios.service'
export class EnviarDatos{
  constructor(
    public dato1: string,
    public dato2: string,
  ){}
}

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.page.html',
  styleUrls: ['./registro-usuarios.page.scss'],
})
export class RegistroUsuariosPage implements OnInit {

  datos_usuarios;
  constructor(private usuariosService: UsuariosService) {
    this.datos_usuarios = new EnviarDatos("Ingrese dato 1","Ingrese dato 2");

  }
 


  ngOnInit() {
  }

  EnviarDatos(){
    this.usuariosService.registrarUsuarios(this.datos_usuarios).subscribe(
      (response:any)=>{
        if(response.registro){
          alert("datos registrados correctamente");
        }else{
         alert("datos no registrados") 
        }

        
      }
    )
    console.log("Datos del usuario: ", this.datos_usuarios);

  }

}
