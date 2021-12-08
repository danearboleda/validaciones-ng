import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { DepartamentoModel } from 'src/app/models/departamento.model';
import { FacultadModel } from 'src/app/models/facultad.model';
import { DepartamentoService } from 'src/app/service/parameters/departamento.service';
import { FacultadService } from 'src/app/service/parameters/facultad.service';
declare const ShowGeneralMessage: any;
declare const InitSelects:any;

@Component({
  selector: 'app-departamento-editar',
  templateUrl: './departamento-editar.component.html',
  styleUrls: ['./departamento-editar.component.css']
})
export class DepartamentoEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  facultadList: FacultadModel[] = [];
  FotodataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DepartamentoService,
    private route: ActivatedRoute,
    private facultadService : FacultadService
  ) { }

  

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
    this.GetDataForSelects();
    this.FormFoto();

  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", Validators.required],
      name: ["", [Validators.required]],
      facultad: ["", [Validators.required]]
    });
  }

  FormFoto(){
    this.FotodataForm=this.fb.group({
 file:["",[]]
    });
   }


  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: DepartamentoModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["name"].setValue(data.nombre);
        this.GetDF["facultad"].setValue(data.id_facultad)
      }
    });
  }
  saveRecord() {
    let model = new DepartamentoModel();
    model.nombre = this.GetDF["name"].value
    model.id = this.GetDF["id"].value;
    model.id_facultad = parseInt(this.GetDF["facultad"].value);
    this.service.EditRecord(model).subscribe({
      next: (data: DepartamentoModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
        this.router.navigate(["parameters/departamento-listar"])
      }
    });
  }

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

  get GetDF() {
    return this.dataForm.controls;
  }


}
