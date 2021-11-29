import { Component, OnInit } from '@angular/core';
import { EvaluacionSolicitudModel } from 'src/app/models/evaluacionSolicitud.model';
import { EvaluacionSolicitudService } from 'src/app/service/parameters/evaluacion-solicitud.service';

@Component({
  selector: 'app-esolicitud-listar',
  templateUrl: './esolicitud-listar.component.html',
  styleUrls: ['./esolicitud-listar.component.css']
})
export class EsolicitudListarComponent implements OnInit {

 
  recordList: EvaluacionSolicitudModel[]=[];

  constructor(private service: EvaluacionSolicitudService) { }

  ngOnInit(): void {
    this.showRecordList();
  }
showRecordList(){
  this.service.GetRecordList().subscribe(
   { next:(data: EvaluacionSolicitudModel[])=>{
      this.recordList=data;
    }
   });

}
}
