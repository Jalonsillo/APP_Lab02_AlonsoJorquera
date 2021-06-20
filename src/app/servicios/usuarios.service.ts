import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  backend = environment.backend+"/registroForm";

  constructor(private http: HttpClient ) { }

  registrarUsuarios(datos_usuarios){
    return this.http.post(`${this.backend}/crear-registro`,datos_usuarios);
  }
  obtenerRegistroUsuarios(){
    return this.http.get(`${this.backend}/obtener-registros`,);
}
}
