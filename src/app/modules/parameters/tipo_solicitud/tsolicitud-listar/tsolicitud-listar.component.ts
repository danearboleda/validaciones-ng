import { Component, OnInit } from '@angular/core';
import { TipoSolicitudModel } from 'src/app/models/tipoSolicitud.model';
import { TipoSolicitudService } from 'src/app/service/parameters/tipo-solicitud.service';

@Component({
  selector: 'app-tsolicitud-listar',
  templateUrl: './tsolicitud-listar.component.html',
  styleUrls: ['./tsolicitud-listar.component.css']
})
export class TsolicitudListarComponent implements OnInit {
  recordList: TipoSolicitudModel[]=[];

  constructor(private service: TipoSolicitudService) { }

  ngOnInit(): void {
    this.showRecordList();
  }
showRecordList(){
  this.service.GetRecordList().subscribe(
   { next:(data: TipoSolicitudModel[])=>{
      this.recordList=data;
    }
   });
}
 

}
