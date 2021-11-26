import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteModel } from 'src/app/modules/parameters/comite.model';

@Injectable({
  providedIn: 'root'
})
export class ComiteService {

  url: string = ConfigurationData.BUSSINESS_MS_URL;
    constructor(private http: HttpClient) {
    }

GetRecordList(): Observable<ComiteModel[]>{
  return this.http.get<ComiteModel[]>(`${this.url}/tipo-comites`);
}

}
