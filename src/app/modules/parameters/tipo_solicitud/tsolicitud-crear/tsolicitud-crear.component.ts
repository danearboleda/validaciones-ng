import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoSolicitudModel } from 'src/app/models/tipoSolicitud.model';
import { UploadFile } from 'src/app/models/uploaded.file.model';
import { TipoSolicitudService } from 'src/app/service/parameters/tipo-solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-tsolicitud-crear',
  templateUrl: './tsolicitud-crear.component.html',
  styleUrls: ['./tsolicitud-crear.component.css']
})
export class TsolicitudCrearComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  archivoForm: FormGroup = new FormGroup({});
  uploadedArchivo: boolean = false;


  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: TipoSolicitudService
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.FormArchivo();

  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      name: ["", [Validators.required]],
      formato: ["", [Validators.required]]
    });
  }
  FormArchivo() {
    this.archivoForm = this.fb.group({
      file: ["", []]
    })
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

  get GetDF() {
    return this.dataForm.controls;
  }


}
