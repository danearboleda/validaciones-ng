import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { LineaInvestigacionModel } from 'src/app/models/lineaInvestigacion.model';
import { ComiteService } from 'src/app/service/parameters/comite.service';
import { LineaInvestigacionService } from 'src/app/service/parameters/linea-investigacion.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-investigacion-editar',
  templateUrl: './investigacion-editar.component.html',
  styleUrls: ['./investigacion-editar.component.css']
})
export class InvestigacionEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: LineaInvestigacionService,
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
    });
  }



  
SearchRecord(){
  let id=this.route.snapshot.params["id"];
  this.service.SearchRecord(id).subscribe({
    next:(data: LineaInvestigacionModel)=>{
      this.GetDF["id"].setValue(data.id);
      this.GetDF["name"].setValue(data.nombre)
    }
  });
}
  saveRecord(){
    let model=new LineaInvestigacionModel();
    model.nombre=this.GetDF["name"].value
model.id=this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
next:(data: LineaInvestigacionModel)=>{
ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
this.router.navigate(["parameters/investigacion-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }
}
