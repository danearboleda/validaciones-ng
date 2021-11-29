import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoSolicitudModel } from 'src/app/models/tipoSolicitud.model';
import { TipoSolicitudService } from 'src/app/service/parameters/tipo-solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-tsolicitud-crear',
  templateUrl: './tsolicitud-crear.component.html',
  styleUrls: ['./tsolicitud-crear.component.css']
})
export class TsolicitudCrearComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: TipoSolicitudService
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      name: ["", [Validators.required]],
      formato: ["", [Validators.required]]
    });
  }

  saveRecord(){
    let model=new TipoSolicitudModel();
    model.nombre=this.GetDF["name"].value;
    model.formato=this.GetDF["formato"].value;

this.service.saveRecord(model).subscribe({
next:(data: TipoSolicitudModel)=>{
ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
this.router.navigate(["parameters/tsolicitud-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }


}
