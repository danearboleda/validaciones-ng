import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { UserModel } from 'src/app/models/user.model';
import { LocalStorageService } from 'src/app/service/shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = ConfigurationData.SECURITY_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.url}/usuarios`);
  }
  saveRecord(data: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.url}/usuarios`, {
      nombre: data.nombre,
      apellido:data.apellido,
      celular: data.celular,
      correo: data.correo,
      id_rol: data.id_rol
      
    }, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
  SearchRecord(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.url}/usuarios/${id}`);
  }
  EditRecord(data: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${this.url}/usuarios/${data._id}`, {
      _id:data._id,
      nombre: data.nombre,
      apellido:data.apellido,
      celular: data.celular,
      correo: data.correo,
      id_rol: data.id_rol
    }, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/usuarios/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
}
