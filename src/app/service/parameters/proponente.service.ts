import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProponenteModel } from 'src/app/models/proponente.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProponenteService {
  url: string = ConfigurationData.BUSSINESS2_MS_URL;
  tk:string=""; 
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.tk=this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<ProponenteModel[]>{
    return this.http.get<ProponenteModel[]>(`${this.url}/proponentes`);
  }
 

  

  saveRecord(data: ProponenteModel): Observable<ProponenteModel>{
    return this.http.post<ProponenteModel>(`${this.url}/proponentes`, {
  correo: data.correo,
  telefono: data.telefono,
  id_tipoVinculacion:data.id_tipoVinculacion,
  otrosNombres:data.otrosNombres,
  p_apellido:data.primerApellido,
  p_nombre:data.primerNombre,
  s_apellido:data.segundoApellido,
  
  foto:data.foto



    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }
  SearchRecord(id: number): Observable<ProponenteModel>{
    return this.http.get<ProponenteModel>(`${this.url}/proponentes/${id}`);
  }
  EditRecord(data: ProponenteModel): Observable<ProponenteModel>{
    return this.http.put<ProponenteModel>(`${this.url}/proponentes/${data.id}`, {
      correo: data.correo,
      telefono: data.telefono,
      id_tipoVinculacion:data.id_tipoVinculacion,
      otrosNombres:data.otrosNombres,
      p_apellido:data.primerApellido,
      p_nombre:data.primerNombre,
      s_apellido:data.segundoApellido,
      
      foto:data.foto


    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }
  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/proponentes/${id}`,{
      headers: new HttpHeaders({
       Authorization:`Bearer ${this.tk}` 
      })
        });
  }
}
