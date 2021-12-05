import { DepartamentoModel } from "./departamento.model";
import { TipoVinculacionModel } from "./tipoViculacion.model";

export class ProponenteModel{
    id?:number;
    documento?:string;
    PrimerNombre?:string;
    OtroNombre?:string;
    primerApellido?:string;
    segundoApellido?:string;
    correo?:string; 
    numCelular?:string;
   id_vinculacion?:number;
   id_departamento?:DepartamentoModel;
   foto?:string;
   vinculacion?:TipoVinculacionModel;
 }