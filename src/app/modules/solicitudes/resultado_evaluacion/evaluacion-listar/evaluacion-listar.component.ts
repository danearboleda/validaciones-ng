import { Component, OnInit } from '@angular/core';
import { ResultadoEvaluacionModel } from 'src/app/models/resultadoEvaluacio.model';
import { ResultadoEvaluacionService } from 'src/app/service/parameters/resultado-evaluacion.service';

@Component({
  selector: 'app-evaluacion-listar',
  templateUrl: './evaluacion-listar.component.html',
  styleUrls: ['./evaluacion-listar.component.css']
})
export class EvaluacionListarComponent implements OnInit {

  recordList: ResultadoEvaluacionModel[]=[];
  constructor(private service: ResultadoEvaluacionService) { }

  ngOnInit(): void {
    this.showRecordList();
  }
showRecordList(){
  this.service.GetRecordList().subscribe(
   { next:(data: ResultadoEvaluacionModel[])=>{
      this.recordList=data;
    }
   });
}


}
