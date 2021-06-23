import { Component, OnInit } from '@angular/core';
import { EgresosService } from '../../servicios/egresos.service';
import { Router } from '@angular/router';
export class Egreso{
  constructor(
    public descripcion: string,
    public precio: number,
    public id_usuario: string,
  ){}
}

@Component({
  selector: 'app-registro-egresos',
  templateUrl: './registro-egresos.page.html',
  styleUrls: ['./registro-egresos.page.scss'],
})
export class RegistroEgresosPage implements OnInit { 

  datos_egresos;
  constructor(private egresosService: EgresosService, private router:Router) {

  }
 


  ngOnInit() {
  }

  RegistroEgreso(){
    console.log(this.datos_egresos)
   this.egresosService.registrarEgresos(this.datos_egresos).subscribe(
      (response:any)=>{
        if(response.registro){
          this.datos_egresos = new Egreso("" ,0,"")
          this.router.navigateByUrl('/inicio')
        }
      },
      error => {
        alert("error en la peticion")
      }
   )
    }
  }
    
