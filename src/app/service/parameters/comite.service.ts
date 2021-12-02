import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteModel } from 'src/app/modules/parameters/comite.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ComiteService {

  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk:string="inicio"; 
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.tk=this.localStorageService.GetToken();
  }

GetRecordList(): Observable<ComiteModel[]>{
  return this.http.get<ComiteModel[]>(`${this.url}/tipo-comites`);
}


saveRecord(data: ComiteModel): Observable<ComiteModel>{
  //el token llega vacio
  console.log("hola");
  console.log(this.tk);
  return this.http.post<ComiteModel>(`${this.url}/tipo-comites`, {
nombre: data.nombre
  },{
headers: new HttpHeaders({
 Authorization:`Bearer ${this.tk}` 
})
  });
}

SearchRecord(id: number): Observable<ComiteModel>{
  return this.http.get<ComiteModel>(`${this.url}/tipo-comites/${id}`);
}
EditRecord(data: ComiteModel): Observable<ComiteModel>{
  return this.http.put<ComiteModel>(`${this.url}/tipo-comites/${data.id}`, {
nombre: data.nombre
  },{
headers: new HttpHeaders({
  
 Authorization:`Bearer ${this.tk}` 
})
  });
}
RemoveRecord(id: number): Observable<any>{
  return this.http.delete<any>(`${this.url}/tipo-comites/${id}`,{
    headers: new HttpHeaders({
     Authorization:`Bearer ${this.tk}` 
    })
      });
}

}
