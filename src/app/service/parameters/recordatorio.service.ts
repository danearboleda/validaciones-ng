import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { RecordatorioModel } from 'src/app/models/recordatorio.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecordatorioService {

  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = "";
  filter: string = '?filter={"include":[{"relation":"solicitudes"},{"relation":"tiene_jurado"}]}';
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<RecordatorioModel[]> {
    return this.http.get<RecordatorioModel[]>(`${this.url}/recordatorios${this.filter}`);
  }

  saveRecord(data: RecordatorioModel): Observable<RecordatorioModel> {
    return this.http.post<RecordatorioModel>(`${this.url}/recordatorios`, {
      id_solicitud: data.id_solicitud,
      tipo: data.tipo,
      resumen: data.resumen,
      fecha: data.fecha,
      hora:data.hora,



    }, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  SearchRecord(id: number): Observable<RecordatorioModel> {
    return this.http.get<RecordatorioModel>(`${this.url}/recordatorios/${id}`);
  }
  EditRecord(data: RecordatorioModel): Observable<RecordatorioModel> {
    return this.http.put<RecordatorioModel>(`${this.url}/recordatorios/${data.id}`, {
      id_jurado:data.id_jurado,
      id_solicitud: data.id_solicitud,
      fecha: data.fecha,
      hora: data.hora,
      tipo: data.tipo,
      resumen: data.resumen
    }, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/recordatorios/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
}
