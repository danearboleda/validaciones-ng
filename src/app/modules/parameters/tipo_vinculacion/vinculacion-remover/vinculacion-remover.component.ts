import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoVinculacionModel } from 'src/app/models/tipoViculacion.model';
import { TipoVinculacionService } from 'src/app/service/parameters/tipo-vinculacion.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-vinculacion-remover',
  templateUrl: './vinculacion-remover.component.html',
  styleUrls: ['./vinculacion-remover.component.css']
})
export class VinculacionRemoverComponent implements OnInit {

  id: number=0;
  name:string="";
  
    constructor(
      
    private router: Router,
    private service: TipoVinculacionService,
    private route: ActivatedRoute
      ) { }
  
    ngOnInit(): void {
    
      this.SearchRecord();
    }
  
   
  SearchRecord(){
    let id=this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next:(data: TipoVinculacionModel)=>{
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
  this.router.navigate(["/parameters/vinculacion-listar"])
  }
  });
    }

}
