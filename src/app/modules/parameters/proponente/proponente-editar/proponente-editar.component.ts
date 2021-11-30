import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProponenteModel } from 'src/app/models/proponente.model';
import { ProponenteService } from 'src/app/service/parameters/proponente.service';
declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-proponente-editar',
  templateUrl: './proponente-editar.component.html',
  styleUrls: ['./proponente-editar.component.css']
})
export class ProponenteEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: ProponenteService,
  private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.searchRecord();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", [Validators.required]],
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
  SearchRecord(){
    let id=this.route.snapshot.params["id"];


this.service.SearchRecord(id).subscribe({
next:(data: ProponenteModel)=>{
this.GetDF["id"].setValue(data.id);
this.GetDF["correo"].setValue(data.correo);
this.GetDF["foto"].setValue(data.foto);
this.GetDF["id_vinculacion"].setValue(data.id_tipoVinculacion);
this.GetDF["s_name"].setValue(data.otrosNombres);
this.GetDF["p_apellido"].setValue(data.primerApellido);
this.GetDF["p_nombre"].setValue(data.primerNombre);
this.GetDF["s_apellido"].setValue(data.segundoApellido);
this.GetDF["telefono"].setValue(data.telefono);

}
});
  }

  saveRecord(){
    let model=new ProponenteModel();
    model.correo=this.GetDF["correo"].value;
    model.foto=this.GetDF["foto"].value;
    model.id=this.GetDF["id"].value;
    model.id_tipoVinculacion=this.GetDF["id_vinculacion"].value;
    model.otrosNombres=this.GetDF["s_name"].value;
    model.primerApellido=this.GetDF["p_apellido"].value;
    model.primerNombre=this.GetDF["p_nombre"].value;
    model.segundoApellido=this.GetDF["s_apellido"].value;
    model.telefono=this.GetDF["telefono"].value;



this.service.EditRecord(model).subscribe({
next:(data: ProponenteModel)=>{
ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
this.router.navigate(["parameters/proponente-listar"])
}
});
  }

  searchRecord(){

  }

  get GetDF() {
    return this.dataForm.controls;
  }


}
