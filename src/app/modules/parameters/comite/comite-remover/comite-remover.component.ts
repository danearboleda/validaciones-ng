import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteService } from 'src/app/service/parameters/comite.service';
import { ComiteModel } from '../../comite.model';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-comite-remover',
  templateUrl: './comite-remover.component.html',
  styleUrls: ['./comite-remover.component.css']
})
export class ComiteRemoverComponent implements OnInit {
id: number=0;
name:string="";

  constructor(
    
  private router: Router,
  private service: ComiteService,
  private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  
    this.SearchRecord();
  }

 
SearchRecord(){
  let id=this.route.snapshot.params["id"];
  this.service.SearchRecord(id).subscribe({
    next:(data: ComiteModel)=>{
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
this.router.navigate(["parameters/comite-listar"])
}
});
  }



}
