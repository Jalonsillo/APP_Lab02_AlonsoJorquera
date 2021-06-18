import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service'
export class EnviarDatos{
  constructor(
    public rut: string,
    public id: string,
    public nombre: string,
    public apellido: string,
    public correo: string,
    public password: string,
  ){}
}

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.page.html',
  styleUrls: ['./registro-usuarios.page.scss'],
})
export class RegistroUsuariosPage implements OnInit {

  datos_usuarios;
  constructor(private usuariosServicie: UsuariosService) {
    this.datos_usuarios = new EnviarDatos("Ingrese rut","Ingrese id","Ingrese nombre", "Ingrese apellido","Ingrese correo","ingrese password");

  }
 


  ngOnInit() {
  }

  EnviarDatos(){
    this.usuariosServicie.registrarUsuarios(this.datos_usuarios).subscribe(
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
