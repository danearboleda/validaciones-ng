import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { DepartamentoProponenteModel } from 'src/app/models/departamentoProponente.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoProponenteService {

  url: string = ConfigurationData.BUSSINESS2_MS_URL;
  tk:string=""; 
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.tk=this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<DepartamentoProponenteModel[]>{
    return this.http.get<DepartamentoProponenteModel[]>(`${this.url}/departamento-proponente`);
  }
  saveRecord(data: DepartamentoProponenteModel): Observable<DepartamentoProponenteModel>{
    return this.http.post<DepartamentoProponenteModel>(`${this.url}/departamento-proponente`, {
      id_departamento: data.id_departamento,
      id_proponente: data.id_proponente


    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }


 

 
  
  SearchRecord(id: number): Observable<DepartamentoProponenteModel>{
    return this.http.get<DepartamentoProponenteModel>(`${this.url}/departamento-proponente/${id}`);
  }
  EditRecord(data: DepartamentoProponenteModel): Observable<DepartamentoProponenteModel>{
    return this.http.put<DepartamentoProponenteModel>(`${this.url}/departamento-proponente/${data.id}`, {
  id_departamento: data.id_departamento,
  id_proponente: data.id_proponente
  
 
    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }
  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/departamento-proponente/${id}`,{
      headers: new HttpHeaders({
       Authorization:`Bearer ${this.tk}` 
      })
        });
  }
}
