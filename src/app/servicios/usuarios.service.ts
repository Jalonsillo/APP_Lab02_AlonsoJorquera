import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  backend = environment.backend+"/registroForm";

  constructor(private http: HttpClient) { }

  registrarUsuarios(datos_usuarios){
    return this.http.post(`${this.backend}/crear_registro`,datos_usuarios);
  }
  obtenerRegistroUsuarios(){
    return this.http.get(`${this.backend}/obtener_registro`,);
}
}
