import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteSolicitudModel } from 'src/app/models/comite_solicitud.model';
import { ComiteSolicitudService } from 'src/app/service/parameters/comite-solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-csolicitud-editar',
  templateUrl: './csolicitud-editar.component.html',
  styleUrls: ['./csolicitud-editar.component.css']
})
export class CsolicitudEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: ComiteSolicitudService,
  private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();

  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", Validators.required],

      respuesta: ["", [Validators.required]],
      id_solicitud: ["", [Validators.required]],
      id_comite: ["", [Validators.required]],
    });
  }

  SearchRecord(){
    let id=this.route.snapshot.params["id"];


this.service.SearchRecord(id).subscribe({
next:(data: ComiteSolicitudModel)=>{
this.GetDF["id"].setValue(data.id);
this.GetDF["id_comite"].setValue(data.id_comite);
this.GetDF["id_solicitud"].setValue(data.id_solicitud);
this.GetDF["respuesta"].setValue(data.respuesta);
}
});
  }
  saveRecord(){
    let model=new ComiteSolicitudModel();
    model.id_comite=this.GetDF["id_comite"].value;
    model.id_solicitud=this.GetDF["id_solicitud"].value;
    model.respuesta=this.GetDF["respuesta"].value;

this.service.EditRecord(model).subscribe({
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
