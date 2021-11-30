import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { LineaInvestigacionModel } from 'src/app/models/lineaInvestigacion.model';
import { ModalidadModel } from 'src/app/models/modalidad.model';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { TipoSolicitudModel } from 'src/app/models/tipoSolicitud.model';
import { SolicitudService } from 'src/app/service/solicitudes/solicitud.service';

declare const ShowGeneralMessage: any;
declare const InitSelects: any;

@Component({
  selector: 'app-solicitudes-crear',
  templateUrl: './solicitudes-crear.component.html',
  styleUrls: ['./solicitudes-crear.component.css']
})
export class SolicitudesCrearComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  investigacionLista: LineaInvestigacionModel[] = [];
  tipoList: TipoSolicitudModel[]=[];
  modalidadList: ModalidadModel[]=[];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SolicitudService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    setTimeout(()=>{
      InitSelects()
    }, 1000);
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      fecha_radicado: ["", [Validators.required]],
      nombre_trabajo: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      id_modalidad: ["", [Validators.required]],
      id_tipoSolicitud: ["", [Validators.required]],
      id_lineaInvestigacion: ["", [Validators.required]],
      id_proponente: ["", [Validators.required]],
    });
  }

  saveRecord() {
    let model = new SolicitudModel();
    model.fecha_radicado = this.GetDF["fecha_radicado"].value,
    model.nombre_trabajo = this.GetDF["nombre_trabajo"].value,
    model.descripcion = this.GetDF["descripcion"].value,
    model.id_modalidad = this.GetDF["id_modalidad"].value,
    model.id_tipoSolicitud = this.GetDF["id_tipoSolicitud"].value,
    model.id_lineaInvestigacion = this.GetDF["id_lineaInvestigacion"].value,
    model.id_proponente = this.GetDF["id_proponente"].value
    

    this.service.saveRecord(model).subscribe({
      next: (data: SolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(["/solicitudes/solicitudes-listar"])
      }
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }


}






