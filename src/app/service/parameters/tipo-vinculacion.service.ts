import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoSolicitudModel } from 'src/app/models/tipoSolicitud.model';
import { TipoVinculacionModel } from 'src/app/models/tipoViculacion.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TipoVinculacionService {

  tk:string="";
  url: string = ConfigurationData.BUSSINESS2_MS_URL;
  constructor(private http: HttpClient, private localStorageService: LocalStorageService ) {
    this.tk=this.localStorageService.GetToken()
  }

  GetRecordList(): Observable<TipoVinculacionModel[]>{
    return this.http.get<TipoVinculacionModel[]>(`${this.url}/tipo-vinculaciones`);
  }

  saveRecord(data: TipoVinculacionModel): Observable<TipoVinculacionModel>{
    return this.http.post<TipoVinculacionModel>(`${this.url}/tipo-vinculaciones`, {
  nombre:data.nombre
  
    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }
  SearchRecord(id: number): Observable<TipoVinculacionModel>{
    return this.http.get<TipoVinculacionModel>(`${this.url}/tipo-vinculaciones/${id}`);
  }
  EditRecord(data: TipoVinculacionModel): Observable<TipoVinculacionModel>{
    return this.http.put<TipoVinculacionModel>(`${this.url}/tipo-vinculaciones/${data.id}`, {
  nombre:data.nombre

    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }
  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/tipo-vinculaciones/${id}`,{
      headers: new HttpHeaders({
       Authorization:`Bearer ${this.tk}` 
      })
        });
  }
}
