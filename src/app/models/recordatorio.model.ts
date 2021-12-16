
import { SolicitudModel } from "./solicitud.model";

export class RecordatorioModel{
    id?:number;
    id_solicitud?:number;
    tipo?:string;
    resumen?:string;
    fecha?:string;
    hora?:string; 

    solicitudes?: SolicitudModel

}