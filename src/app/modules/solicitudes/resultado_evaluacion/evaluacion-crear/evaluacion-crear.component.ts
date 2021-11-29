import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ResultadoEvaluacionModel } from 'src/app/models/resultadoEvaluacio.model';
import { ResultadoEvaluacionService } from 'src/app/service/parameters/resultado-evaluacion.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-evaluacion-crear',
  templateUrl: './evaluacion-crear.component.html',
  styleUrls: ['./evaluacion-crear.component.css']
})
export class EvaluacionCrearComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: ResultadoEvaluacionService
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id_solicitud: ["", [Validators.required]],
      formato: ["", [Validators.required]],
      respuesta: ["", [Validators.required]],
    });
  }

  saveRecord(){
    let model=new ResultadoEvaluacionModel();
    model.id_evaluacionSolicitud=this.GetDF["id_solicitud"].value;
    model.formato=this.GetDF["formato"].value;
    model.resultado=this.GetDF["resultado"].value;

this.service.saveRecord(model).subscribe({
next:(data: ResultadoEvaluacionModel)=>{
ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
this.router.navigate(["solicitudes/resultado_evaluacion/evaluacion-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }

}
