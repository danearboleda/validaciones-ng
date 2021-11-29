import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { JuradoModel } from 'src/app/models/jurado.model';
import { ComiteSolicitudService } from 'src/app/service/parameters/comite-solicitud.service';
import { JuradoService } from 'src/app/service/parameters/jurado.service';
declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-jurado-editar',
  templateUrl: './jurado-editar.component.html',
  styleUrls: ['./jurado-editar.component.css']
})
export class JuradoEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: JuradoService,
  private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();

  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", Validators.required],

      correo: ["", [Validators.required]],
      entidad: ["", [Validators.required]],
      idJurado: ["", [Validators.required]],      
      tel: ["", [Validators.required]],

      name: ["", [Validators.required]]

    });
  }

  SearchRecord(){
    let id=this.route.snapshot.params["id"];


this.service.SearchRecord(id).subscribe({
next:(data: JuradoModel)=>{
this.GetDF["id"].setValue(data.id);
this.GetDF["correo"].setValue(data.correo);
this.GetDF["entidad"].setValue(data.entidad);
this.GetDF["idJurado"].setValue(data.id_tipoJurado);
this.GetDF["name"].setValue(data.nombre);

this.GetDF["tel"].setValue(data.telefono);

}
});
  }
  

  saveRecord(){
    let model=new JuradoModel();
    model.nombre=this.GetDF["name"].value;
    model.correo=this.GetDF["correo"].value;
    model.telefono=this.GetDF["tel"].value;
    model.entidad=this.GetDF["entidad"].value;
    model.id_tipoJurado=this.GetDF["idJurado"].value;



this.service.EditRecord(model).subscribe({
next:(data: JuradoModel)=>{
ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
this.router.navigate(["parameters/jurado-listar"])
}
});
  }
  get GetDF() {
    return this.dataForm.controls;
  }

}
