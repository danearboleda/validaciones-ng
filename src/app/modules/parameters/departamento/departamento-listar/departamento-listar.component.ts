import { Component, OnInit } from '@angular/core';
import { DepartamentoModel } from 'src/app/models/departamento.model';
import { DepartamentoService } from 'src/app/service/parameters/departamento.service';

@Component({
  selector: 'app-departamento-listar',
  templateUrl: './departamento-listar.component.html',
  styleUrls: ['./departamento-listar.component.css']
})
export class DepartamentoListarComponent implements OnInit {

  recordList: DepartamentoModel[]=[];

  constructor(private service: DepartamentoService) { }

  ngOnInit(): void {
    this.showRecordList();
  }
showRecordList(){
  this.service.GetRecordList().subscribe(
   { next:(data: DepartamentoModel[])=>{
      this.recordList=data;
    }
   });
}
 

}
