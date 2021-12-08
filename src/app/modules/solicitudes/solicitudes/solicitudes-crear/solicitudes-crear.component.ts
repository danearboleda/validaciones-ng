import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { LineaInvestigacionModel } from 'src/app/models/lineaInvestigacion.model';
import { ModalidadModel } from 'src/app/models/modalidad.model';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { TipoSolicitudModel } from 'src/app/models/tipoSolicitud.model';
import { UploadFile } from 'src/app/models/uploaded.file.model';
import { ComiteModel } from 'src/app/modules/parameters/comite.model';
import { ComiteService } from 'src/app/service/parameters/comite.service';
import { LineaInvestigacionService } from 'src/app/service/parameters/linea-investigacion.service';
import { ModalidadService } from 'src/app/service/parameters/modalidad.service';
import { TipoSolicitudService } from 'src/app/service/parameters/tipo-solicitud.service';
import { SolicitudService } from 'src/app/service/solicitudes/solicitud.service';

declare const ShowGeneralMessage: any;
declare const InitSelect: any;

@Component({
  selector: 'app-solicitudes-crear',
  templateUrl: './solicitudes-crear.component.html',
  styleUrls: ['./solicitudes-crear.component.css']
})
export class SolicitudesCrearComponent implements OnInit {
  uploadedArchivo: boolean = false;
  dataForm: FormGroup = new FormGroup({});
  archivoForm: FormGroup = new FormGroup({});
  investigacionLista: LineaInvestigacionModel[] = [];
  tipoList: TipoSolicitudModel[] = [];
  modalidadList: ModalidadModel[] = [];
  comiteList: ComiteModel[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SolicitudService,
    private lineaInvestigacionService: LineaInvestigacionService,
    private tipoSolicitudService: TipoSolicitudService,
    private modalidadService: ModalidadService,
    private comitesService: ComiteService

  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.GetDataForSelects();
    this.FormArchivo();

  }

  GetDataForSelects() {
    this.lineaInvestigacionService.GetRecordList().subscribe({
      next: (data: LineaInvestigacionModel[]) => {
        this.investigacionLista = data;
        setTimeout(() => {
          InitSelect("selInvestigacion");

        }, 100);

      }
    });
    this.tipoSolicitudService.GetRecordList().subscribe({
      next: (data: TipoSolicitudModel[]) => {
        this.tipoList = data;
        setTimeout(() => {
          InitSelect("selTipoSolicitud");
        }, 100);

      }
    });
    this.modalidadService.GetRecordList().subscribe({
      next: (data: ModalidadModel[]) => {
        this.modalidadList = data;
        setTimeout(() => {
          InitSelect("selModalidad");
        }, 100);

      }
    });
    this.comitesService.GetRecordList().subscribe({
      next: (data: ComiteModel[]) => {
        this.comiteList = data;
        setTimeout(() => {
          InitSelect("selComites");
        }, 100);

      }
    });
  }

  FormArchivo() {
    this.archivoForm = this.fb.group({
      file: ["", []]
    })
  }
  FormBuilding() {
    this.dataForm = this.fb.group({
      fecha_radicado: ["", [Validators.required]],
      nombre_trabajo: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      id_tipoSolicitud: ["", [Validators.required]],
      id_modalidad: ["", [Validators.required]],
      id_LineaInvestigacion: ["", [Validators.required]],
      tipoComites: ["", [Validators.required]],
      archivo: ["", [Validators.required]]
    });
  }

  saveRecord() {
    let model = new SolicitudModel();
    let comites = this.GetDF["tipoComites"].value;
    model.fecha_radicado = this.GetDF["fecha_radicado"].value,
      model.nombre_trabajo = this.GetDF["nombre_trabajo"].value,
      model.descripcion = this.GetDF["descripcion"].value,
      model.id_tipoSolicitud = parseInt(this.GetDF["id_tipoSolicitud"].value),
      model.id_modalidad = parseInt(this.GetDF["id_modalidad"].value),
      model.id_LineaInvestigacion = parseInt(this.GetDF["id_LineaInvestigacion"].value),
      model.archivo = this.GetDF["archivo"].value

    this.service.saveRecord(model).subscribe({
      next: (data: SolicitudModel) => {
        let i = 0;
        for (i = 0; i <= comites.length-1; i = i + 1) {
          let id_comite = comites[i];
          this.service.vincularComiteSolicitud(data, id_comite).subscribe({
            next: () => console.log("Comites Vinculados")
          });
        }
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(["/solicitudes/solicitudes-listar"])

      }
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }



  //Carga de archivo de la solicitud  
  uploadArchivo(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.archivoForm.controls["file"].setValue(file);
    }
  }

  submitFileToServer() {
    const form = new FormData();
    form.append("file", this.archivoForm.controls["file"].value)
    this.service.UploadArchivo(form).subscribe({
      next: (data: UploadFile) => {
        this.dataForm.controls["archivo"].setValue(data.filename);
        this.uploadedArchivo = true;
      }
    })
  }


}






