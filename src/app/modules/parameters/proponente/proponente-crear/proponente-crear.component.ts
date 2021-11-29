import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProponenteModel } from 'src/app/models/proponente.model';
import { ProponenteService } from 'src/app/service/parameters/proponente.service';
declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-proponente-crear',
  templateUrl: './proponente-crear.component.html',
  styleUrls: ['./proponente-crear.component.css']
})
export class ProponenteCrearComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: ProponenteService
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      p_nombre: ["", [Validators.required]],
      correo: ["", [Validators.required, Validators.email]],
      telefono: ["", []],
      documento: ["", [Validators.required]],
      idJurado: ["", [Validators.required]],
      s_name: ["", [Validators.required]],
      s_apellido: ["", [Validators.required]],
      p_apellido: ["", [Validators.required]],
      id_vinculacion: ["", [Validators.required]],
      foto: ["", []]
     
    });
  }

  saveRecord(){
    let model=new ProponenteModel();
    model.correo=this.GetDF["correo"].value;
    model.foto=this.GetDF["foto"].value;
    model.id_tipoVinculacion=this.GetDF["id_vinculacion"].value;
    model.otrosNombres=this.GetDF["s_name"].value;
    model.primerApellido=this.GetDF["p_apellido"].value;
    model.primerNombre=this.GetDF["p_nombre"].value;
    model.segundoApellido=this.GetDF["s_apellido"].value;
    model.telefono=this.GetDF["telefono"].value;



this.service.saveRecord(model).subscribe({
next:(data: ProponenteModel)=>{
ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
this.router.navigate(["parameters/proponente-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }


}
