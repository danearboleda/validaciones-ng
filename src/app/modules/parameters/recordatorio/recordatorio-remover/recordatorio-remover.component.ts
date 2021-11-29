import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { RecordatorioModel } from 'src/app/models/recordatorio.model';
import { ComiteService } from 'src/app/service/parameters/comite.service';
import { RecordatorioService } from 'src/app/service/parameters/recordatorio.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-recordatorio-remover',
  templateUrl: './recordatorio-remover.component.html',
  styleUrls: ['./recordatorio-remover.component.css']
})
export class RecordatorioRemoverComponent implements OnInit {

  id: number=0;
resumen:any="";
id_solicitud:any;
fecha:any;
tipo:any;
  constructor(
    
  private router: Router,
  private service: RecordatorioService,
  private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  
    this.SearchRecord();
  }

 
SearchRecord(){
  let id=this.route.snapshot.params["id"];
  this.service.SearchRecord(id).subscribe({
    next:(data: RecordatorioModel)=>{
if(data.id){
      this.id=data.id;
this.id_solicitud=data.id_solicitud;
this.fecha=data.fecha;
this.tipo=data.tipo;
this.resumen=data.resumen;


}
    }
  });
}
  removeRecord(){
     this.service.RemoveRecord(this.id).subscribe({
next:(data: any)=>{
ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
this.router.navigate(["parameters/recordatorio-listar"])
}
});
  }

}
