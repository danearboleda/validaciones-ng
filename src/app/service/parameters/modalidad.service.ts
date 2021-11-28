import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ModalidadModel } from 'src/app/models/modalidad.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk:string=""; 
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.tk=this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<ModalidadModel[]>{
    return this.http.get<ModalidadModel[]>(`${this.url}/modalidades`);
  }
  

  saveRecord(data: ModalidadModel): Observable<ModalidadModel>{
    return this.http.post<ModalidadModel>(`${this.url}/modalidaes`, {
  nombre: data.nombre
    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }
  SearchRecord(id: number): Observable<ModalidadModel>{
    return this.http.get<ModalidadModel>(`${this.url}/modalidades/${id}`);
  }
  EditRecord(data: ModalidadModel): Observable<ModalidadModel>{
    return this.http.put<ModalidadModel>(`${this.url}/modalidades/${data.id}`, {
  nombre: data.nombre
    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }
  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/modalidades/${id}`,{
      headers: new HttpHeaders({
       Authorization:`Bearer ${this.tk}` 
      })
        });
  }

}
