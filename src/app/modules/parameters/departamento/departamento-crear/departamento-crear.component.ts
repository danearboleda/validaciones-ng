import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { DepartamentoModel } from 'src/app/models/departamento.model';
import { DepartamentoService } from 'src/app/service/parameters/departamento.service';
declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-departamento-crear',
  templateUrl: './departamento-crear.component.html',
  styleUrls: ['./departamento-crear.component.css']
})
export class DepartamentoCrearComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: DepartamentoService
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      name: ["", [Validators.required]],
      facultad: ["", [Validators.required]]
    });
  }

  saveRecord(){
    let model=new DepartamentoModel();
    model.nombre=this.GetDF["name"].value;
    model.id_facultad=this.GetDF["facultad"].value;

this.service.saveRecord(model).subscribe({
next:(data: DepartamentoModel)=>{
ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
this.router.navigate(["parameters/departamento-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }



}
