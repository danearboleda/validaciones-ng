import { userDataModel } from "./user-data.models";

export class SessionDataModel{
 tk?: string;
 usuario?: userDataModel; 
 isLoggedIn:boolean=false;  
}