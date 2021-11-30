import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoVinculacionModel } from 'src/app/models/tipoViculacion.model';
import { TipoVinculacionService } from 'src/app/service/parameters/tipo-vinculacion.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-vinculacion-editar',
  templateUrl: './vinculacion-editar.component.html',
  styleUrls: ['./vinculacion-editar.component.css']
})
export class VinculacionEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: TipoVinculacionService,
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
    next:(data: TipoVinculacionModel)=>{
      this.GetDF["id"].setValue(data.id);
      this.GetDF["name"].setValue(data.nombre)
    }
  });
}
  saveRecord(){
    let model=new TipoVinculacionModel();
    model.nombre=this.GetDF["name"].value
model.id=this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
next:(data: TipoVinculacionModel)=>{
ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
this.router.navigate(["/parameters/vinculacion-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }

}
