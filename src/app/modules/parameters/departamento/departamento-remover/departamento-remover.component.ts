import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { DepartamentoModel } from 'src/app/models/departamento.model';
import { DepartamentoService } from 'src/app/service/parameters/departamento.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-departamento-remover',
  templateUrl: './departamento-remover.component.html',
  styleUrls: ['./departamento-remover.component.css']
})
export class DepartamentoRemoverComponent implements OnInit {

  id: number=0;
  name:any="";
  facultad:any;
  
    constructor(
      
    private router: Router,
    private service: DepartamentoService,
    private route: ActivatedRoute
      ) { }
  
    ngOnInit(): void {
    
      this.SearchRecord();
    }
  
   
  SearchRecord(){
    let id=this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next:(data: DepartamentoModel)=>{
  if(data.id && data.nombre){
        this.id=data.id;
  this.name=data.nombre;
  this.facultad=data.id_facultad;
  }
      }
    });
  }
    removeRecord(){
       this.service.RemoveRecord(this.id).subscribe({
  next:(data: any)=>{
  ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
  this.router.navigate(["parameters/departamento-listar"])
  }
  });
    }

}
