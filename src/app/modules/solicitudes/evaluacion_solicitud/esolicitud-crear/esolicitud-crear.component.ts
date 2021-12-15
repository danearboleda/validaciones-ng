import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EvaluacionSolicitudModel } from 'src/app/models/evaluacionSolicitud.model';
import { JuradoModel } from 'src/app/models/jurado.model';
import { EvaluacionSolicitudService } from 'src/app/service/parameters/evaluacion-solicitud.service';
import { JuradoService } from 'src/app/service/parameters/jurado.service';

declare const ShowGeneralMessage: any;
declare const InitSelect: any;

@Component({
  selector: 'app-esolicitud-crear',
  templateUrl: './esolicitud-crear.component.html',
  styleUrls: ['./esolicitud-crear.component.css']
})
export class EsolicitudCrearComponent implements OnInit {

  juradosList:JuradoModel[]=[];
  
  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: EvaluacionSolicitudService,
    private route: ActivatedRoute,
    private juradoService: JuradoService

  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.GetDataForSelects();
  }

  GetDataForSelects() {
    this.juradoService.GetRecordList().subscribe({
      next: (data: JuradoModel[]) => {
        this.juradosList = data;
        setTimeout(() => {
          InitSelect("selInvestigacion");

        }, 100);

      }
    });
  }
  FormBuilding() {
    this.dataForm = this.fb.group({
      jurado: ["", [Validators.required]],
      
      invitacion: ["", [Validators.required]],
      f_respuesta: ["", [Validators.required]],
      respuesta: ["", [Validators.required]],
      observaciones: ["", []]

    });
  }

  saveRecord() {
    let model = new EvaluacionSolicitudModel();
    model.id_jurado = parseInt(this.GetDF["jurado"].value);
    model.id_solicitud = parseInt(this.route.snapshot.params["id"]);
    model.fecha_invitacion = this.GetDF["invitacion"].value;
   
    this.service.saveRecord(model).subscribe({
      next: (data: EvaluacionSolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(["parameters/esolicitud-listar"])
      }
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  
  

}
