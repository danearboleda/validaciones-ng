import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProponenteModel } from 'src/app/models/proponente.model';
import { UploadedFile } from 'src/app/models/uploaded.file.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProponenteService {
  url: string = ConfigurationData.BUSSINESS2_MS_URL;
  tk:string=""; 
  filter:string=`?filter={%22include%22:[{%22relation%22:%22vinculaciones%22},{%22relation%22:%22tiene_departamento%22}]}`;
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.tk=this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<ProponenteModel[]>{
    return this.http.get<ProponenteModel[]>(`${this.url}/proponentes${this.filter}`);
  }
 

  

  saveRecord(data: ProponenteModel): Observable<ProponenteModel>{
    return this.http.post<ProponenteModel>(`${this.url}/proponentes`, {
  correo: data.correo,
  numCelular: data.numCelular,
  id_vinculacion:data.id_vinculacion,
  id_departamento:data.id_departamento,
  OtroNombre:data.OtroNombre,
PrimerApellido:data.PrimerApellido,
  PrimerNombre:data.PrimerNombre,
  SegundoApellido:data.SegundoApellido,
  documento:data.documento,
  Foto:data.Foto



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
      id:data.id,
      correo: data.correo,
      numCelular: data.numCelular,
      id_vinculacion:data.id_vinculacion,
      id_departamento:data.id_departamento,
      OtroNombre:data.OtroNombre,
    PrimerApellido:data.PrimerApellido,
      PrimerNombre:data.PrimerNombre,
      SegundoApellido:data.SegundoApellido,
      documento:data.documento,
      Foto:data.Foto


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

  UploadFoto(form: FormData):Observable<UploadedFile>{
    return this.http.post<UploadedFile>(`${this.url}/CargarFoto`,
    form,
    {
      headers: new HttpHeaders({
       Authorization:`Bearer ${this.tk}` 
      })
        });
  }
}
