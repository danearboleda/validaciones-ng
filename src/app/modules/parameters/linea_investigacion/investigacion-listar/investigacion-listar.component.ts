import { Component, OnInit } from '@angular/core';
import { LineaInvestigacionModel } from 'src/app/models/lineaInvestigacion.model';
import { LineaInvestigacionService } from 'src/app/service/parameters/linea-investigacion.service';

@Component({
  selector: 'app-investigacion-listar',
  templateUrl: './investigacion-listar.component.html',
  styleUrls: ['./investigacion-listar.component.css']
})
export class InvestigacionListarComponent implements OnInit {

  recordList: LineaInvestigacionModel[]=[];
  constructor(private service: LineaInvestigacionService) { }

  ngOnInit(): void {
    this.showRecordList();
  }
showRecordList(){
  this.service.GetRecordList().subscribe(
   { next:(data: LineaInvestigacionModel[])=>{
      this.recordList=data;
    }
   });
}

}
