import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EvaluacionSolicitudModel } from 'src/app/models/evaluacionSolicitud.model';
import { EvaluacionSolicitudService } from 'src/app/service/parameters/evaluacion-solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-esolicitud-editar',
  templateUrl: './esolicitud-editar.component.html',
  styleUrls: ['./esolicitud-editar.component.css']
})
export class EsolicitudEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: EvaluacionSolicitudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();

  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", Validators.required],
      id_comite: ["", [Validators.required]],
      respuesta: ["", [Validators.required]],
      id_solicitud: ["", [Validators.required]],
      observaciones: ["", [Validators.required]],
      f_respuesta: ["", [Validators.required]],
      f_invitacion: ["", [Validators.required]],
    });
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];


    this.service.SearchRecord(id).subscribe({
      next: (data: EvaluacionSolicitudModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["id_jurado"].setValue(data.id_jurado);
        this.GetDF["id_solicitud"].setValue(data.id_solicitud);
        this.GetDF["f_invitacion"].setValue(data.fecha_invitacion);
        this.GetDF["f_respuesta"].setValue(data.fecha_respuesta);
        this.GetDF["respuesta"].setValue(data.respuesta);
        this.GetDF["observaciones"].setValue(data.observaciones);



      }
    });
  }


  saveRecord() {
    let model = new EvaluacionSolicitudModel();
    model.id_jurado = this.GetDF["id_jurado"].value;
    model.id_solicitud = this.GetDF["id_solicitud"].value;
    model.fecha_invitacion = this.GetDF["f_invitacion"].value;
    model.fecha_respuesta = this.GetDF["f_respuesta"].value;
    model.respuesta = this.GetDF["respuesta"].value;
    model.observaciones = this.GetDF["observaciones"].value;




    this.service.EditRecord(model).subscribe({
      next: (data: EvaluacionSolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
        this.router.navigate(["parameters/esolicitud-listar"])
      }
    });
  }
  get GetDF() {
    return this.dataForm.controls;
  }


}
