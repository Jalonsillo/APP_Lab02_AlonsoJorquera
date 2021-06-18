import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class EgresosService {
  
  backend = environment.backend+"/registroForm";

  constructor(private http: HttpClient) { }

  registrarEgresos(datos_egresos){
    return this.http.post(`${this.backend}/crear-registro`, datos_egresos);
  }
  obtenerRegistroEgresos(){
    return this.http.get(`${this.backend}/obtener-registro`);
}
}
