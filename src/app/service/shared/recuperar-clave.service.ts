import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { RecuperarClaveModel } from 'src/app/models/recuperar-clave.model';

@Injectable({
  providedIn: 'root'
})
export class RecuperarClaveService {
  url: string = ConfigurationData.SECURITY_MS_URL;
  constructor(
    private http: HttpClient
  ) { }





  RecuperarClave(data: RecuperarClaveModel): Observable<RecuperarClaveModel> {
    return this.http.post<RecuperarClaveModel>(`${this.url}/recuperar-clave`, {
      correo: data.correo,
    });
  }
}
