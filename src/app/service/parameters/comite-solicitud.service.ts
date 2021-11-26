import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteSolicitudModel } from 'src/app/models/comite_solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class ComiteSolicitudService {

  url: string = ConfigurationData.BUSSINESS_MS_URL;
  constructor(private http: HttpClient) {
  }

  GetRecordList(): Observable<ComiteSolicitudModel[]>{
    return this.http.get<ComiteSolicitudModel[]>(`${this.url}/comite-solicitudes`);
  }
}
