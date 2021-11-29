import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoSolicitudModel } from 'src/app/models/tipoSolicitud.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TipoSolicitudService {

  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk:string=""; 
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.tk=this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<TipoSolicitudModel[]>{
    return this.http.get<TipoSolicitudModel[]>(`${this.url}/tipo-solicitudes`);
  }

  saveRecord(data: TipoSolicitudModel): Observable<TipoSolicitudModel>{
    return this.http.post<TipoSolicitudModel>(`${this.url}/tipo-solicitudes`, {
  nombre: data.nombre,
  formato: data.formato

  

    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }

  SearchRecord(id: number): Observable<TipoSolicitudModel>{
    return this.http.get<TipoSolicitudModel>(`${this.url}/tipo-solicitudes/${id}`);
  }
  EditRecord(data: TipoSolicitudModel): Observable<TipoSolicitudModel>{
    return this.http.put<TipoSolicitudModel>(`${this.url}/tipo-solicitudes/${data.id}`, {
  nombre: data.nombre
    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }
  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/tipo-solicitudes/${id}`,{
      headers: new HttpHeaders({
       Authorization:`Bearer ${this.tk}` 
      })
        });
  }
}
