import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { LineaInvestigacionModel } from 'src/app/models/lineaInvestigacion.model';
import { LineaInvestigacionService } from 'src/app/service/parameters/linea-investigacion.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-investigacion-crear',
  templateUrl: './investigacion-crear.component.html',
  styleUrls: ['./investigacion-crear.component.css']
})
export class InvestigacionCrearComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: LineaInvestigacionService
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      name: ["", [Validators.required]]
    });
  }

  saveRecord(){
    let model=new LineaInvestigacionModel();
    model.nombre=this.GetDF["name"].value
this.service.saveRecord(model).subscribe({
next:(data: LineaInvestigacionModel)=>{
ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
this.router.navigate(["parameters/investigacion-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }

}
