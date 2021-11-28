import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ResultadoEvaluacionModel } from 'src/app/models/resultadoEvaluacio.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ResultadoEvaluacionService {

  tk:string="";
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  constructor(private http: HttpClient, private localStorageService: LocalStorageService ) {
    this.tk=this.localStorageService.GetToken()
  }

  GetRecordList(): Observable<ResultadoEvaluacionModel[]>{
    return this.http.get<ResultadoEvaluacionModel[]>(`${this.url}/resultado-evaluaciones`);
  }

  saveRecord(data: ResultadoEvaluacionModel): Observable<ResultadoEvaluacionModel>{
    return this.http.post<ResultadoEvaluacionModel>(`${this.url}/resultado-evaluaciones`, {
  id_evaluacionSolictud: data.id_evaluacionSolicitud,
  formato: data.formato,
  resultado:data.resultado
    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }
  SearchRecord(id: number): Observable<ResultadoEvaluacionModel>{
    return this.http.get<ResultadoEvaluacionModel>(`${this.url}/resultado-evaluaciones/${id}`);
  }
  EditRecord(data: ResultadoEvaluacionModel): Observable<ResultadoEvaluacionModel>{
    return this.http.put<ResultadoEvaluacionModel>(`${this.url}/resultado-evaluaciones/${data.id}`, {
      id_evaluacionSolictud: data.id_evaluacionSolicitud,
      formato: data.formato,
      resultado:data.resultado

    },{
  headers: new HttpHeaders({
   Authorization:`Bearer ${this.tk}` 
  })
    });
  }
  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/resultado-evaluaciones/${id}`,{
      headers: new HttpHeaders({
       Authorization:`Bearer ${this.tk}` 
      })
        });
  }}
