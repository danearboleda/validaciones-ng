import { RecordatorioModel } from "./recordatorio.model";
import { TipoComiteModel } from "./tipoComite.model";
import {EvaluacionSolicitudModel} from "./evaluacionSolicitud.model"
import { TipoSolicitudModel } from "./tipoSolicitud.model";
import { ModalidadModel } from "./modalidad.model";
import { LineaInvestigacionModel } from "./lineaInvestigacion.model";

export class SolicitudModel{
  id?: number;
  fecha_radicado?: string;
  nombre_trabajo?: string;
  archivo?: string;
  descripcion?: string;
  id_tipoSolicitud?:number;
  id_modalidad?:number;
  id_LineaInvestigacion?:number


  tipoSolicitudes?: TipoSolicitudModel;
  modalidades?: ModalidadModel;
  tiene_LineaInvesitgacion?: LineaInvestigacionModel;


  tipoComites?:TipoComiteModel[];
  recordatorios?:RecordatorioModel[];
  evaluacionSolicitudes?:EvaluacionSolicitudModel[];
 

}