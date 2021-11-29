import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { RecordatorioModel } from 'src/app/models/recordatorio.model';
import { RecordatorioService } from 'src/app/service/parameters/recordatorio.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-recordatorio-crear',
  templateUrl: './recordatorio-crear.component.html',
  styleUrls: ['./recordatorio-crear.component.css']
})
export class RecordatorioCrearComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: RecordatorioService
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id_solicitud: ["", [Validators.required]],
      tipo: ["", [Validators.required]],
      resumen: ["", [Validators.required]],
      fecha: ["", [Validators.required]]
    });
  }

  saveRecord(){
    let model=new RecordatorioModel();
    model.id_solicitud=this.GetDF["id_solicitud"].value;
    model.tipo=this.GetDF["tipo"].value;
    model.resumen=this.GetDF["resumen"].value;
    model.fecha=this.GetDF["fecha"].value;



this.service.saveRecord(model).subscribe({
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
