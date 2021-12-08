import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { SolicitudService } from 'src/app/service/solicitudes/solicitud.service';

@Component({
  selector: 'app-solicitudes-listar',
  templateUrl: './solicitudes-listar.component.html',
  styleUrls: ['./solicitudes-listar.component.css']
})
export class SolicitudesListarComponent implements OnInit {

  recordList: SolicitudModel[] =[];

  constructor(
    private service: SolicitudService
    ) {}

  ngOnInit(): void {
    this.showRecordList();
  }
  showRecordList() {
    this.service.GetRecordList().subscribe(
      {
        next: (data: SolicitudModel[]) => {
          this.recordList = data;
          console.log(data);
        }
      });
  }

}
