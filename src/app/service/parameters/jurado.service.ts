import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { JuradoModel } from 'src/app/models/jurado.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JuradoService {

  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<JuradoModel[]> {
    return this.http.get<JuradoModel[]>(`${this.url}/jurados`);
  }
  saveRecord(data: JuradoModel): Observable<JuradoModel> {
    return this.http.post<JuradoModel>(`${this.url}/jurados`, {
      nombre: data.nombre,
      telefono: data.telefono,
      correo: data.correo,
      id_tipo_jurado: data.id_tipo_jurado,
      entidad:data.entidad
    }, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
  SearchRecord(id: number): Observable<JuradoModel> {
    return this.http.get<JuradoModel>(`${this.url}/jurados/${id}`);
  }
  EditRecord(data: JuradoModel): Observable<JuradoModel> {
    return this.http.put<JuradoModel>(`${this.url}/jurados/${data.id}`, {
      id:data.id,
      nombre: data.nombre,
      correo: data.correo,
      entidad: data.entidad,
      telefono: data.telefono
    }, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/jurados/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

}
