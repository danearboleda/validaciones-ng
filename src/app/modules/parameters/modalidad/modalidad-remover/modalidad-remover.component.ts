import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ModalidadModel } from 'src/app/models/modalidad.model';
import { ComiteService } from 'src/app/service/parameters/comite.service';
import { ModalidadService } from 'src/app/service/parameters/modalidad.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-modalidad-remover',
  templateUrl: './modalidad-remover.component.html',
  styleUrls: ['./modalidad-remover.component.css']
})
export class ModalidadRemoverComponent implements OnInit {

  id: number=0;
name:string="";

  constructor(
    
  private router: Router,
  private service: ModalidadService,
  private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  
    this.SearchRecord();
  }

 
SearchRecord(){
  let id=this.route.snapshot.params["id"];
  this.service.SearchRecord(id).subscribe({
    next:(data: ModalidadModel)=>{
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
this.router.navigate(["parameters/modalidad-listar"])
}
});
  }

}
