import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { JuradoModel } from 'src/app/models/jurado.model';
import { RecordatorioModel } from 'src/app/models/recordatorio.model';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { JuradoService } from 'src/app/service/parameters/jurado.service';
import { RecordatorioService } from 'src/app/service/parameters/recordatorio.service';
import { SolicitudService } from 'src/app/service/solicitudes/solicitud.service';

declare const ShowGeneralMessage: any;
declare const InitSelect: any;


@Component({
  selector: 'app-recordatorio-crear',
  templateUrl: './recordatorio-crear.component.html',
  styleUrls: ['./recordatorio-crear.component.css']
})
export class RecordatorioCrearComponent implements OnInit {

  solicitudList: SolicitudModel[]=[];
  juradoList:JuradoModel[]=[];
  hoy:Date = new Date();


  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: RecordatorioService,
    private solicitudService: SolicitudService,
    private juradoService: JuradoService
  ) { }


  GetDataForSelects() {
    this.solicitudService.GetRecordList().subscribe({
      next: (data: SolicitudModel[]) => {
        this.solicitudList = data;
        setTimeout(() => {
          InitSelect("selSolicitud");

        }, 100);

      }
    });
    this.juradoService.GetRecordList().subscribe({
      next: (data: JuradoModel[]) => {
        this.juradoList = data;
        setTimeout(() => {
          InitSelect("selJurado");

        }, 100);

      }
    });
  }

  ngOnInit(): void {
    this.FormBuilding();
    this.GetDataForSelects();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id_solicitud: ["", [Validators.required]],
      id_jurado: ["", [Validators.required]],
      tipo: ["", [Validators.required]],
      resumen: ["", [Validators.required]],
    });
  }

  saveRecord() {
    let model = new RecordatorioModel();
    model.id_jurado = parseInt(this.GetDF["id_jurado"].value);
    model.id_solicitud = parseInt(this.GetDF["id_solicitud"].value);
    model.tipo = this.GetDF["tipo"].value;
    model.resumen = this.GetDF["resumen"].value;
    model.fecha = (this.hoy.getDate() + '-' + ( this.hoy.getMonth() + 1 ) + '-' + this.hoy.getFullYear()).toString();
    model.hora = (this.hoy.getHours() + ':' + this.hoy.getMinutes()+ ':' + this.hoy.getSeconds()).toString();


    this.service.saveRecord(model).subscribe({
      next: (data: RecordatorioModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(["parameters/recordatorio-listar"])
      }
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

}
