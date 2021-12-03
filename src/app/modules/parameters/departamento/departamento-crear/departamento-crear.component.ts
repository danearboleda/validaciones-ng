import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { DepartamentoModel } from 'src/app/models/departamento.model';
import { FacultadModel } from 'src/app/models/facultad.model';
import { DepartamentoService } from 'src/app/service/parameters/departamento.service';
import { FacultadService } from 'src/app/service/parameters/facultad.service';
declare const ShowGeneralMessage: any;
declare const InitSelects:any;

@Component({
  selector: 'app-departamento-crear',
  templateUrl: './departamento-crear.component.html',
  styleUrls: ['./departamento-crear.component.css']
})
export class DepartamentoCrearComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  facultadList: FacultadModel[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DepartamentoService,
    private facultadService : FacultadService,
    
  ) { }

  GetDataForSelects(){
    this.facultadService.GetRecordList().subscribe({
      next: (data: FacultadModel[])=>{
        this.facultadList= data;

        setTimeout(()=>{
          InitSelects("selFacultad")
        },100);
      }
    });
  }
  
  ngOnInit(): void {
    this.FormBuilding();
    this.GetDataForSelects();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      name: ["", [Validators.required]],
      facultad: ["", [Validators.required]]
    });
  }

  saveRecord() {
    let model = new DepartamentoModel();
    model.nombre = this.GetDF["name"].value;
    model.id_facultad = parseInt(this.GetDF["facultad"].value);
    
    this.service.saveRecord(model).subscribe({
      next: (data: DepartamentoModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(["parameters/departamento-listar"])
      }
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }



}
