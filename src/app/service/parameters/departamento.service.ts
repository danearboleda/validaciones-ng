import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { DepartamentoModel } from 'src/app/models/departamento.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  url: string = ConfigurationData.BUSSINESS2_MS_URL;
  tk: string = "";
  filter: string = `?filter={"include":[{"relation":"facultad"}]}`;
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<DepartamentoModel[]> {
    return this.http.get<DepartamentoModel[]>(`${this.url}/departamentos${this.filter}`);
  }

  saveRecord(data: DepartamentoModel): Observable<DepartamentoModel> {
    return this.http.post<DepartamentoModel>(`${this.url}/departamentos`,
      {
        nombre: data.nombre,
        id_facultad: data.id_facultad
      }, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  SearchRecord(id: number): Observable<DepartamentoModel> {
    return this.http.get<DepartamentoModel>(`${this.url}/departamentos/${id}`);
  }
  EditRecord(data: DepartamentoModel): Observable<DepartamentoModel> {
    return this.http.put<DepartamentoModel>(`${this.url}/departamentos/${data.id}`, {
      nombre: data.nombre,
      id_facultad: data.id_facultad
    }, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/departamentos/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
}