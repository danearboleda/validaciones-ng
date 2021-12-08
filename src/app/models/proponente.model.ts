import { DepartamentoModel } from "./departamento.model";
import { TipoVinculacionModel } from "./tipoViculacion.model";

export class ProponenteModel{
    id?:number;
    documento?:string;
    PrimerNombre?:string;
    OtroNombre?:string;
    PrimerApellido?:string;
    SegundoApellido?:string;
    correo?:string; 
    numCelular?:string;
   id_vinculacion?:number;
   id_departamento?:number;
   Foto?:string;
   vinculaciones?:TipoVinculacionModel;
   tiene_departamento?:DepartamentoModel;
 }