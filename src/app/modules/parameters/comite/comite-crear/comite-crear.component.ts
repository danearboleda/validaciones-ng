import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteService } from 'src/app/service/parameters/comite.service';
import { ComiteModel } from '../../comite.model';
declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-comite-crear',
  templateUrl: './comite-crear.component.html',
  styleUrls: ['./comite-crear.component.css']
})


export class ComiteCrearComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: ComiteService
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      name: ["", [Validators.required]],
    });
  }

  saveRecord(){
    let model=new ComiteModel();
    model.nombre=this.GetDF["name"].value
this.service.saveRecord(model).subscribe({
next:(data: ComiteModel)=>{
ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
this.router.navigate(["parameters/comite-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }
}
