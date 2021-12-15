import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteSolicitudModel } from 'src/app/models/comite_solicitud.model';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { UploadFile } from 'src/app/models/uploaded.file.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = "";

  filter: string = `?filter={"include":[{"relation":"tipoSolicitudes"},{"relation":"tipoComites"},{"relation":"recordatorios"},{"relation":"evaluacionSolicitudes"},{"relation":"tiene_LineaInvesitgacion"},{"relation":"modalidades"}]}`;
  

  constructor(private http: HttpClient, 
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<SolicitudModel[]> {
    return this.http.get<SolicitudModel[]>(`${this.url}/solicitudes${this.filter}`);
  }


   saveRecord(data: SolicitudModel): Observable<SolicitudModel> {
    return this.http.post<SolicitudModel>(`${this.url}/solicitudes`, {
      fecha_radicado: data.fecha_radicado,
      nombre_trabajo: data.nombre_trabajo,
      archivo: data.archivo,
      descripcion: data.descripcion,
      id_tipoSolicitud: data.id_tipoSolicitud,
      id_modalidad: data.id_modalidad,
      id_LineaInvestigacion: data.id_LineaInvestigacion,
      id_proponente:data.id_proponente
    }, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  

  vincularComiteSolicitud(solicitud:SolicitudModel,id_comite:any){
    let comite1=parseInt(id_comite);
    let respuesta1 = "a";
    console.log(comite1+100+" Resss");
    return this.http.post<ComiteSolicitudModel>(
      
      `${this.url}/comite-solicitudes`, {
    
      id_solicitud:solicitud.id,
      id_comite:comite1,
      respuesta:respuesta1
      
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
      
      id_tipoSolicitud: data.id_tipoSolicitud,
      id_modalidad: data.id_modalidad,
      id_LineaInvestigacion: data.id_LineaInvestigacion,
      tipoComites: data.tipoComites,
      recordatorios: data.recordatorios,
      evaluacionSolicitudes: data.evaluacionSolicitudes,
      archivo: data.archivo
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


  UploadArchivo(form: FormData):Observable<UploadFile>{
    return this.http.post<UploadFile>(
      `${this.url}/CargarArchivoComprimido`, 
      form,
      {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });

  }

  
}
