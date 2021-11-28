import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ModalidadModel } from 'src/app/models/modalidad.model';
import { ModalidadService } from 'src/app/service/parameters/modalidad.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-modalidad-crear',
  templateUrl: './modalidad-crear.component.html',
  styleUrls: ['./modalidad-crear.component.css']
})
export class ModalidadCrearComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: ModalidadService
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      name: ["", [Validators.required]]
    });
  }

  saveRecord(){
    let model=new ModalidadModel();
    model.nombre=this.GetDF["name"].value
this.service.saveRecord(model).subscribe({
next:(data: ModalidadModel)=>{
ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
this.router.navigate(["parameters/modalidad-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }


}
