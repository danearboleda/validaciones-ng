import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EvaluacionSolicitudModel } from 'src/app/models/evaluacionSolicitud.model';
import { EvaluacionSolicitudService } from 'src/app/service/parameters/evaluacion-solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-esolicitud-crear',
  templateUrl: './esolicitud-crear.component.html',
  styleUrls: ['./esolicitud-crear.component.css']
})
export class EsolicitudCrearComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: EvaluacionSolicitudService
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      jurado: ["", [Validators.required]],
      solicitud: ["", [Validators.required, Validators.email]],
      invitacion: ["", [Validators.required]],
      f_respuesta: ["", [Validators.required]],
      respuesta: ["", [Validators.required]],
      observaciones: ["", []]

    });
  }

  saveRecord(){
    let model=new EvaluacionSolicitudModel();
    model.id_jurado=this.GetDF["jurado"].value;
    model.id_solicitud=this.GetDF["solicitud"].value;
    model.fecha_invitacion=this.GetDF["invitacion"].value;
    model.fecha_respuesta=this.GetDF["f_respuesta"].value;
    model.respuesta=this.GetDF["respuesta"].value;
    model.observaciones=this.GetDF["observaciones"].value;




this.service.saveRecord(model).subscribe({
next:(data: EvaluacionSolicitudModel)=>{
ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
this.router.navigate(["parameters/esolicitud-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }

}
