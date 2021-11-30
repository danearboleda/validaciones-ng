import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoVinculacionModel } from 'src/app/models/tipoViculacion.model';
import { TipoVinculacionService } from 'src/app/service/parameters/tipo-vinculacion.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-vinculacion-crear',
  templateUrl: './vinculacion-crear.component.html',
  styleUrls: ['./vinculacion-crear.component.css']
})


export class VinculacionCrearComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: TipoVinculacionService
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      name: ["", [Validators.required]],
    });
  }

  saveRecord(){
    let model=new TipoVinculacionModel();
    model.nombre=this.GetDF["name"].value
this.service.saveRecord(model).subscribe({
next:(data: TipoVinculacionModel)=>{
ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
this.router.navigate(["/parameters/viculacion-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }

}
