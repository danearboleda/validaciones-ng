import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/parameters/service/user-service.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css']
})
export class RemoveUserComponent implements OnInit {

  _id: any;
  nombre:any="";
  apellido:any;
  celular:any;
  correo:any;
  id_rol:any;


  
    constructor(
      
    private router: Router,
    private service: UserService,
    private route: ActivatedRoute
      ) { }
  
    ngOnInit(): void {
    
      this.SearchRecord();
    }
  
   
  SearchRecord(){
    let id=this.route.snapshot.params["_id"];
    this.service.SearchRecord(id).subscribe({
      next:(data: UserModel)=>{
  if(data._id && data.correo &&data.id_rol){
        this._id=data._id;
  this.celular=data.celular;
  this.correo=data.correo;
  this.apellido=data.apellido;
  this.nombre=data.nombre;
  this.id_rol=(data.id_rol).toString();


  }
      }
    });
  }
    removeRecord(){
       this.service.RemoveRecord(this._id).subscribe({
  next:(data: any)=>{
  ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
  this.router.navigate(["security/user-list"])
  }
  });
    }


}
