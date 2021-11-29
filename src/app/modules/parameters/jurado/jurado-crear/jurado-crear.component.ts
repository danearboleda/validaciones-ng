import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { JuradoModel } from 'src/app/models/jurado.model';
import { JuradoService } from 'src/app/service/parameters/jurado.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-jurado-crear',
  templateUrl: './jurado-crear.component.html',
  styleUrls: ['./jurado-crear.component.css']
})


export class JuradoCrearComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: JuradoService
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      name: ["", [Validators.required]],
      correo: ["", [Validators.required, Validators.email]],
      tel: ["", [Validators.required]],
      entidad: ["", [Validators.required]],
      idJurado: ["", [Validators.required]]
    });
  }

  saveRecord(){
    let model=new JuradoModel();
    model.nombre=this.GetDF["name"].value;
    model.correo=this.GetDF["correo"].value;
    model.telefono=this.GetDF["tel"].value;
    model.entidad=this.GetDF["entidad"].value;
    model.id_tipoJurado=this.GetDF["idJurado"].value;



this.service.saveRecord(model).subscribe({
next:(data: JuradoModel)=>{
ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
this.router.navigate(["parameters/jurado-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }


}
