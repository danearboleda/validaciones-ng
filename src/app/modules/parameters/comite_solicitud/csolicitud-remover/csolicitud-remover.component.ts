import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteSolicitudModel } from 'src/app/models/comite_solicitud.model';
import { ComiteSolicitudService } from 'src/app/service/parameters/comite-solicitud.service';
import { ComiteService } from 'src/app/service/parameters/comite.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-csolicitud-remover',
  templateUrl: './csolicitud-remover.component.html',
  styleUrls: ['./csolicitud-remover.component.css']
})
export class CsolicitudRemoverComponent implements OnInit {

  id: number=0;
  id_comite: number=0;
  id_solicitud: number=0;
respuesta:string="";

  constructor(
    
  private router: Router,
  private service: ComiteSolicitudService,
  private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  
    this.SearchRecord();
  }

 
SearchRecord(){
  let id=this.route.snapshot.params["id"];
  this.service.SearchRecord(id).subscribe({
    next:(data: ComiteSolicitudModel)=>{
if(data.id && data.id_comite && data.id_solicitud && data.respuesta){
      this.id=data.id;
this.id_comite=data.id_comite;
this.id_solicitud=data.id_solicitud;

this.respuesta=data.respuesta;

}
    }
  });
}
  removeRecord(){
     this.service.RemoveRecord(this.id).subscribe({
next:(data: any)=>{
ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
this.router.navigate(["parameters/csolicitud-listar"])
}
});
  }
}
