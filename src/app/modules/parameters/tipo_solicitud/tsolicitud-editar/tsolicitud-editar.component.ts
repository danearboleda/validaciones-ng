import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoSolicitudModel } from 'src/app/models/tipoSolicitud.model';
import { ComiteService } from 'src/app/service/parameters/comite.service';
import { TipoSolicitudService } from 'src/app/service/parameters/tipo-solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-tsolicitud-editar',
  templateUrl: './tsolicitud-editar.component.html',
  styleUrls: ['./tsolicitud-editar.component.css']
})
export class TsolicitudEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: TipoSolicitudService,
  private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", Validators.required],
      name: ["", [Validators.required]],
      formato: ["", [Validators.required]]
    });
  }



  
SearchRecord(){
  let id=this.route.snapshot.params["id"];
  this.service.SearchRecord(id).subscribe({
    next:(data: TipoSolicitudModel)=>{
      this.GetDF["id"].setValue(data.id);
      this.GetDF["name"].setValue(data.nombre);
      this.GetDF["formato"].setValue(data.formato)
    }
  });
}
  saveRecord(){
    let model=new TipoSolicitudModel();
    model.nombre=this.GetDF["name"].value
model.id=this.GetDF["id"].value;
model.formato=this.GetDF["formato"].value;
    this.service.EditRecord(model).subscribe({
next:(data: TipoSolicitudModel)=>{
ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
this.router.navigate(["parameters/tsolicitud-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }

}
