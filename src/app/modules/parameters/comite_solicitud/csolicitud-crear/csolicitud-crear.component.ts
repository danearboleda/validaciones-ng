import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteSolicitudModel } from 'src/app/models/comite_solicitud.model';
import { ComiteSolicitudService } from 'src/app/service/parameters/comite-solicitud.service';


declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-csolicitud-crear',
  templateUrl: './csolicitud-crear.component.html',
  styleUrls: ['./csolicitud-crear.component.css']
})
export class CsolicitudCrearComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: ComiteSolicitudService
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      respuesta: ["", [Validators.required]],
      id_solicitud: ["", [Validators.required]],
      id_comite: ["", [Validators.required]],
    });
  }

  saveRecord(){
    let model=new ComiteSolicitudModel();
    model.id_comite=this.GetDF["id_comite"].value;
    model.id_solicitud=this.GetDF["id_solicitud"].value;
    model.respuesta=this.GetDF["respuesta"].value;

this.service.saveRecord(model).subscribe({
next:(data: ComiteSolicitudModel)=>{
ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
this.router.navigate(["parameters/csolicitud-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }

}
