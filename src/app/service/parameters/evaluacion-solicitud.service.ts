import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EvaluacionSolicitudModel } from 'src/app/models/evaluacionSolicitud.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionSolicitudService {

  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk:string=""; 
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.tk=this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<EvaluacionSolicitudModel[]>{
    return this.http.get<EvaluacionSolicitudModel[]>(`${this.url}/evaluacion-solicitudes`);
  }
  saveRecord(data: EvaluacionSolicitudModel): Observable<EvaluacionSolicitudModel>{
    return this.http.post<EvaluacionSolicitudModel>(`${this.url}/evaluacion-solicitudes`, {
  id_solicitud: data.id_solicitud,
  id_jurado: data.id_jurado,
  fecha_invitacion:data.fecha_invitacion,
  fecha_respuesta:data.fecha_respuesta,
  respuesta:data.respuesta,
  observaciones:data.observaciones


    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }


 

 
  
  SearchRecord(id: number): Observable<EvaluacionSolicitudModel>{
    return this.http.get<EvaluacionSolicitudModel>(`${this.url}/evaluacion-solicitudes/${id}`);
  }
  EditRecord(data: EvaluacionSolicitudModel): Observable<EvaluacionSolicitudModel>{
    return this.http.put<EvaluacionSolicitudModel>(`${this.url}/evaluacion-solicitudes/${data.id}`, {
  id_jurado: data.id_jurado,
  id_solicitud: data.id_solicitud,
  fecha_invitacion: data.fecha_invitacion,
  fecha_respuesta: data.fecha_respuesta,

  respuesta: data.respuesta,
  observaciones: data.observaciones,



    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }
  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/jurados/${id}`,{
      headers: new HttpHeaders({
       Authorization:`Bearer ${this.tk}` 
      })
        });
  }

}
