import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ModalidadModel } from 'src/app/models/modalidad.model';
import { ComiteService } from 'src/app/service/parameters/comite.service';
import { ModalidadService } from 'src/app/service/parameters/modalidad.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-modalidad-editar',
  templateUrl: './modalidad-editar.component.html',
  styleUrls: ['./modalidad-editar.component.css']
})
export class ModalidadEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: ModalidadService,
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
    next:(data: ModalidadModel)=>{
      this.GetDF["id"].setValue(data.id);
      this.GetDF["name"].setValue(data.nombre)
    }
  });
}
  saveRecord(){
    let model=new ModalidadModel();
    model.nombre=this.GetDF["name"].value
model.id=this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
next:(data: ModalidadModel)=>{
ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
this.router.navigate(["/parameters/modalidad-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }

}
