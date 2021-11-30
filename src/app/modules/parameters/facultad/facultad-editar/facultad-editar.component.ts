import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { FacultadModel } from 'src/app/models/facultad.model';
import { FacultadService } from 'src/app/service/parameters/facultad.service';
declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-facultad-editar',
  templateUrl: './facultad-editar.component.html',
  styleUrls: ['./facultad-editar.component.css']
})
export class FacultadEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: FacultadService,
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
    next:(data: FacultadModel)=>{
      this.GetDF["id"].setValue(data.id);
      this.GetDF["name"].setValue(data.nombre)
    }
  });
}
  saveRecord(){
    let model=new FacultadModel();
    model.nombre=this.GetDF["name"].value
model.id=this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
next:(data: FacultadModel)=>{
ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
this.router.navigate(["/parameters/facultad-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }

}
