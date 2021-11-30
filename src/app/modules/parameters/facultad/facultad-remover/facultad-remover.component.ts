import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { FacultadModel } from 'src/app/models/facultad.model';
import { FacultadService } from 'src/app/service/parameters/facultad.service';
declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-facultad-remover',
  templateUrl: './facultad-remover.component.html',
  styleUrls: ['./facultad-remover.component.css']
})
export class FacultadRemoverComponent implements OnInit {

  id: number=0;
  name:string="";
  
    constructor(
      
    private router: Router,
    private service: FacultadService,
    private route: ActivatedRoute
      ) { }
  
    ngOnInit(): void {
    
      this.SearchRecord();
    }
  
   
  SearchRecord(){
    let id=this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next:(data: FacultadModel)=>{
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
  this.router.navigate(["/parameters/facultad-listar"])
  }
  });
    }

}
