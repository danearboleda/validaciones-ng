import { Component, OnInit } from '@angular/core';
import { RecordatorioModel } from 'src/app/models/recordatorio.model';
import { RecordatorioService } from 'src/app/service/parameters/recordatorio.service';

@Component({
  selector: 'app-recordatorio-listar',
  templateUrl: './recordatorio-listar.component.html',
  styleUrls: ['./recordatorio-listar.component.css']
})
export class RecordatorioListarComponent implements OnInit {

  recordList: RecordatorioModel[]=[];
  constructor(private service: RecordatorioService) { }

  ngOnInit(): void {
    this.showRecordList();
  }
showRecordList(){
  this.service.GetRecordList().subscribe(
   { next:(data: RecordatorioModel[])=>{
      this.recordList=data;
    }
   });
}

}
