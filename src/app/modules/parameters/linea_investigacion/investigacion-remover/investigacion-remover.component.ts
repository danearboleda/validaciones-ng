import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { LineaInvestigacionModel } from 'src/app/models/lineaInvestigacion.model';
import { ComiteService } from 'src/app/service/parameters/comite.service';
import { LineaInvestigacionService } from 'src/app/service/parameters/linea-investigacion.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-investigacion-remover',
  templateUrl: './investigacion-remover.component.html',
  styleUrls: ['./investigacion-remover.component.css']
})
export class InvestigacionRemoverComponent implements OnInit {

  id: number=0;
name:string="";

  constructor(
    
  private router: Router,
  private service: LineaInvestigacionService,
  private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  
    this.SearchRecord();
  }

 
SearchRecord(){
  let id=this.route.snapshot.params["id"];
  this.service.SearchRecord(id).subscribe({
    next:(data: LineaInvestigacionModel)=>{
if(data.id && data.nombre){
      this.id=data.id;
this.name=data.nombre;
}
    }
  });
}
  removeRecord(){
     this.service.RemoveRecord(this.id).subscribe({
next:(data: any)=>{
ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
this.router.navigate(["parameters/investigacion-listar"])
}
});
  }

}
