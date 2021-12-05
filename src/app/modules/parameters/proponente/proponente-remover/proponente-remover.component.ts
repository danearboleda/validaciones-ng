import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProponenteModel } from 'src/app/models/proponente.model';
import { ProponenteService } from 'src/app/service/parameters/proponente.service';
declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-proponente-remover',
  templateUrl: './proponente-remover.component.html',
  styleUrls: ['./proponente-remover.component.css']
})
export class ProponenteRemoverComponent implements OnInit {

  id: number=0;
  documento:any="";
  pnombre:any;
  snombre:any;
  papellido:any;
  sapellido:any;
  correo:any;
  celular:any;
  idvinculacion:any;
  foto:any;


  
    constructor(
      
    private router: Router,
    private service: ProponenteService,
    private route: ActivatedRoute
      ) { }
  
    ngOnInit(): void {
    
      this.SearchRecord();
    }
  
   
  SearchRecord(){
    let id=this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next:(data: ProponenteModel)=>{
  if(data.id && data.correo){
        this.id=data.id;
  this.celular=data.numCelular;
  this.correo=data.correo;
  this.foto=data.foto;
  this.snombre=data.OtroNombre;
  this.idvinculacion=data.id_vinculacion;
  this.papellido=data.primerApellido;
  this.pnombre=data.PrimerNombre;
  this.sapellido=data.segundoApellido;

  }
      }
    });
  }
    removeRecord(){
       this.service.RemoveRecord(this.id).subscribe({
  next:(data: any)=>{
  ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
  this.router.navigate(["parameters/proponente-listar"])
  }
  });
    }

}
