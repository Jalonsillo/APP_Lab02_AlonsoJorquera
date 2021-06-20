import { Component, OnInit } from '@angular/core';
import { EgresosService } from '../../servicios/egresos.service'
@Component({
  selector: 'app-listar-egresos',
  templateUrl: './listar-egresos.page.html',
  styleUrls: ['./listar-egresos.page.scss'],
})
export class ListarEgresosPage implements OnInit {
 
datos_obtenidos;
constructor(private egresosService: EgresosService) { }

  ngOnInit() {
  }
  
ionVieWillEnter(){
  this.obtenerDatosEgresos()
}

 obtenerDatosEgresos(){

   this.egresosService.obtenerRegistroEgresos().subscribe(
   (response:any)=>{
     this.datos_obtenidos = response.registros;
   },
   error=>{
     alert("error en la peticion")
   }
 )
}
}
