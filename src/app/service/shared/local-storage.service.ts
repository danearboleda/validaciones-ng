import { Injectable } from '@angular/core';
import { SessionDataModel } from 'src/app/models/session-data.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

SaveSessionData(data: SessionDataModel): boolean{
let currentData= localStorage.getItem("session-info");
if(currentData){
  return false;
}else{
  let sessionDataString=JSON.stringify(data);
  localStorage.setItem("session-info", sessionDataString);
  return true;
}
}

RemoveSessionData(): boolean{
  let currentData=localStorage.getItem("session-info");
  if(currentData){
    localStorage.removeItem("session-info");
return true;
  }else{
    return false;
  }
}



GetToken(): string{
  let currentData=localStorage.getItem("session-info");
// no obtiene el current data
  if(currentData){
    let sessionDataJson=JSON.parse(currentData);
//return sessionDataJson.tk;
return "algun token"
  }else{
    //entra aqui y retorna vacio
return "vacio";
  }
}

GetSessionInfo(): SessionDataModel{
  let currentData=localStorage.getItem("session-info");

  if(currentData){
    let sessionDataJson=JSON.parse(currentData);
return sessionDataJson;
  }else{
return new SessionDataModel();
  }
}

}
