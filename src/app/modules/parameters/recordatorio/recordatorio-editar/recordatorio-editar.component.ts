import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { RecordatorioModel } from 'src/app/models/recordatorio.model';
import { ComiteSolicitudService } from 'src/app/service/parameters/comite-solicitud.service';
import { RecordatorioService } from 'src/app/service/parameters/recordatorio.service';
declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-recordatorio-editar',
  templateUrl: './recordatorio-editar.component.html',
  styleUrls: ['./recordatorio-editar.component.css']
})
export class RecordatorioEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: RecordatorioService,
  private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();

  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", Validators.required],

      resumen: ["", [Validators.required]],
      id_solicitud: ["", [Validators.required]],
      fecha: ["", [Validators.required]],
      tipo: ["", [Validators.required]]

    });
  }

  SearchRecord(){
    let id=this.route.snapshot.params["id"];


this.service.SearchRecord(id).subscribe({
next:(data: RecordatorioModel)=>{
this.GetDF["id"].setValue(data.id);
this.GetDF["id_solicitud"].setValue(data.id_solicitud);
this.GetDF["fecha"].setValue(data.fecha);
//this.GetDF[""].setValue(data.hora);
this.GetDF["resumen"].setValue(data.resumen);
this.GetDF["tipo"].setValue(data.tipo);



}
});
  }
  saveRecord(){
    let model=new RecordatorioModel();
    model.id_solicitud=this.GetDF["id_solicitud"].value;
    model.tipo=this.GetDF["tipo"].value;
    model.resumen=this.GetDF["resumen"].value;
    model.fecha=this.GetDF["fecha"].value;



this.service.EditRecord(model).subscribe({
next:(data: RecordatorioModel)=>{
ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
this.router.navigate(["parameters/recordatorio-listar"])
}
});
  }
  get GetDF() {
    return this.dataForm.controls;
  }

}
