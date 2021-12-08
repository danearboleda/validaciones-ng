import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { SolicitudService } from 'src/app/service/solicitudes/solicitud.service';
declare const ShowGeneralMessage:any;
@Component({
  selector: 'app-solicitudes-anular',
  templateUrl: './solicitudes-anular.component.html',
  styleUrls: ['./solicitudes-anular.component.css']
})
export class SolicitudesAnularComponent implements OnInit {

  id: number = 0;
  nombre_trabajo: string = "";

  constructor(
    private router: Router,
    private service: SolicitudService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.SearchRecord();

  }




  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: SolicitudModel) => {
        if (data.id && data.nombre_trabajo) {
          this.id = data.id,
            this.nombre_trabajo = data.nombre_trabajo
        }

      }
    })
  }

  RemoveRecord() {
 
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
       
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
        this.router.navigate(["/solicitudes/solicitudes-listar"])

      }
    });
  }

}


