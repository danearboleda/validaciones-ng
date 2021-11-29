import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteService } from 'src/app/service/parameters/comite.service';
import { ComiteModel } from '../../comite.model';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-comite-editar',
  templateUrl: './comite-editar.component.html',
  styleUrls: ['./comite-editar.component.css']
})
export class ComiteEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: ComiteService,
  private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", Validators.required],
      name: ["", [Validators.required]],
    });
  }



  
SearchRecord(){
  let id=this.route.snapshot.params["id"];
  this.service.SearchRecord(id).subscribe({
    next:(data: ComiteModel)=>{
      this.GetDF["id"].setValue(data.id);
      this.GetDF["name"].setValue(data.nombre)
    }
  });
}
  saveRecord(){
    let model=new ComiteModel();
    model.nombre=this.GetDF["name"].value
model.id=this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
next:(data: ComiteModel)=>{
ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
this.router.navigate(["parameters/comite-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }

}
