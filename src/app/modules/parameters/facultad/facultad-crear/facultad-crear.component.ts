import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { FacultadModel } from 'src/app/models/facultad.model';
import { FacultadService } from 'src/app/service/parameters/facultad.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-facultad-crear',
  templateUrl: './facultad-crear.component.html',
  styleUrls: ['./facultad-crear.component.css']
})
export class FacultadCrearComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: FacultadService
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
    let model=new FacultadModel();
    model.nombre=this.GetDF["name"].value
this.service.saveRecord(model).subscribe({
next:(data: FacultadModel)=>{
ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
this.router.navigate(["/parameters/facultad-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }
  
}
