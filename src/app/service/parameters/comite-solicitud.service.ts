import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteSolicitudModel } from 'src/app/models/comite_solicitud.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ComiteSolicitudService {
tk:string="";
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  constructor(private http: HttpClient, private localStorageService: LocalStorageService ) {
    this.tk=this.localStorageService.GetToken()
  }

  GetRecordList(): Observable<ComiteSolicitudModel[]>{
    return this.http.get<ComiteSolicitudModel[]>(`${this.url}/comite-solicitudes`);
  }

  saveRecord(data: ComiteSolicitudModel): Observable<ComiteSolicitudModel>{
    return this.http.post<ComiteSolicitudModel>(`${this.url}/comite-solicitudes`, {
  id_comite: data.id_comite,
  id_solicitud: data.id_solicitud,
  respuesta:data.respuesta
    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }
  SearchRecord(id: number): Observable<ComiteSolicitudModel>{
    return this.http.get<ComiteSolicitudModel>(`${this.url}/comite-solicitudes/${id}`);
  }
  EditRecord(data: ComiteSolicitudModel): Observable<ComiteSolicitudModel>{
    return this.http.put<ComiteSolicitudModel>(`${this.url}/comite-solicitudes/${data.id}`, {
  id_comite: data.id_comite,
  id_solicitud: data.id_solicitud,
  respuesta: data.respuesta

    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }
  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/comite-solicitudes/${id}`,{
      headers: new HttpHeaders({
       Authorization:`Bearer ${this.tk}` 
      })
        });
  }
}
