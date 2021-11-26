import { Injectable } from '@angular/core';
import { SessionDataModel } from 'src/app/models/session-data.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

SaveSessionData(data: SessionDataModel): boolean{
let currentData= localStorage.getItem("session-data");
if(currentData){
  return false;
}else{
  let sessionDataString=JSON.stringify(data);
  localStorage.setItem("session-data", sessionDataString);
  return true;
}
}

RemoveSessionData(): boolean{
  let currentData=localStorage.getItem("session_data");
  if(currentData){
    localStorage.removeItem("session-data");
return true;
  }else{
    return false;
  }
}



GetToken(): string{
  let currentData=localStorage.getItem("session_data");

  if(currentData){
    let sessionDataJson=JSON.parse(currentData);
return sessionDataJson.tk;
  }else{
return "";
  }
}

GetSessionInfo(): SessionDataModel{
  let currentData=localStorage.getItem("session_data");

  if(currentData){
    let sessionDataJson=JSON.parse(currentData);
return sessionDataJson;
  }else{
return new SessionDataModel();
  }
}

}
