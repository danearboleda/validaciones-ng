import { Component, OnInit } from '@angular/core';
import { ComiteSolicitudModel } from 'src/app/models/comite_solicitud.model';
import { ComiteSolicitudService } from 'src/app/service/parameters/comite-solicitud.service';

@Component({
  selector: 'app-csolicitud-listar',
  templateUrl: './csolicitud-listar.component.html',
  styleUrls: ['./csolicitud-listar.component.css']
})
export class CsolicitudListarComponent implements OnInit {

  recordList: ComiteSolicitudModel[]=[];
  constructor(private service: ComiteSolicitudService) { }

  ngOnInit(): void {
    this.showRecordList();
  }
showRecordList(){
  this.service.GetRecordList().subscribe(
   { next:(data: ComiteSolicitudModel[])=>{
      this.recordList=data;
    }
   });
}


}
