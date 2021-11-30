import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = "";

  filter: string = `?filter={"include":[{"relation":"tipoSolicitudes"}]}`;
  

  constructor(private http: HttpClient, 
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<SolicitudModel[]> {
    return this.http.get<SolicitudModel[]>(`${this.url}/solicitudes${this.filter}`);
  }


  saveRecord(data: SolicitudModel): Observable<SolicitudModel> {
    return this.http.post<SolicitudModel>(`${this.url}/solicitudes`, {
      id:data.id,
      fecha_radicado: data.fecha_radicado,
      nombre_trabajo: data.nombre_trabajo,
      descripcion: data.archivo,
      id_modalidad: data.id_modalidad,
      id_tipoSolicitud: data.id_tipoSolicitud,
      id_lineaInvestigacion: data.id_lineaInvestigacion,
      id_proponente: data.id_proponente 
    }, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
  SearchRecord(id: number): Observable<SolicitudModel> {
    return this.http.get<SolicitudModel>(`${this.url}/solicitudes/${id}`);
  }
  EditRecord(data: SolicitudModel): Observable<SolicitudModel> {
    return this.http.put<SolicitudModel>(`${this.url}/solicitudes/${data.id}`, {
      id:data.id,
      fecha_radicado: data.fecha_radicado,
      nombre_trabajo: data.nombre_trabajo,
      descripcion: data.archivo,
      id_modalidad: data.id_modalidad,
      id_tipoSolicitud: data.id_tipoSolicitud,
      id_lineaInvestigacion: data.id_lineaInvestigacion,
      id_proponente: data.id_proponente 


    }, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/solicitudes/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
}
