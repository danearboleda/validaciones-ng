import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import {  LineaInvestigacionModel } from 'src/app/models/lineaInvestigacion.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LineaInvestigacionService {

  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk:string=""; 
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.tk=this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<LineaInvestigacionModel[]>{
    return this.http.get<LineaInvestigacionModel[]>(`${this.url}/linea-investigaciones`);
  }

  saveRecord(data: LineaInvestigacionModel): Observable<LineaInvestigacionModel>{
    return this.http.post<LineaInvestigacionModel>(`${this.url}/linea-investigaciones`, {
  nombre: data.nombre
    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }

  SearchRecord(id: number): Observable<LineaInvestigacionModel>{
    return this.http.get<LineaInvestigacionModel>(`${this.url}/linea-investigaciones/${id}`);
  }
  EditRecord(data: LineaInvestigacionModel): Observable<LineaInvestigacionModel>{
    return this.http.put<LineaInvestigacionModel>(`${this.url}/linea-investigaciones/${data.id}`, {
  nombre: data.nombre 
    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }
  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/linea-investigaciones/${id}`,{
      headers: new HttpHeaders({
       Authorization:`Bearer ${this.tk}` 
      })
        });
  }
  
}
