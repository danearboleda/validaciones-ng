import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoSolicitudModel } from 'src/app/models/tipoSolicitud.model';
import { ComiteService } from 'src/app/service/parameters/comite.service';
import { TipoSolicitudService } from 'src/app/service/parameters/tipo-solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-tsolicitud-remover',
  templateUrl: './tsolicitud-remover.component.html',
  styleUrls: ['./tsolicitud-remover.component.css']
})
export class TsolicitudRemoverComponent implements OnInit {

  id: number=0;
  name:any="";
  formato:any;
  
    constructor(
      
    private router: Router,
    private service: TipoSolicitudService,
    private route: ActivatedRoute
      ) { }
  
    ngOnInit(): void {
    
      this.SearchRecord();
    }
  
   
  SearchRecord(){
    let id=this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next:(data: TipoSolicitudModel)=>{
  if(data.id && data.nombre){
        this.id=data.id;
  this.name=data.nombre;
  this.formato=data.formato;
  }
      }
    });
  }
    removeRecord(){
       this.service.RemoveRecord(this.id).subscribe({
  next:(data: any)=>{
  ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
  this.router.navigate(["parameters/tcsolicitud-listar"])
  }
  });
    }

}
