import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { RolModel } from 'src/app/models/rol.model';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/parameters/service/user-service.service';
import { RolService } from 'src/app/security/services/rol.service';
declare const ShowGeneralMessage: any;
declare const InitSelect: any;

@Component({
  selector: 'app-user-edition',
  templateUrl: './user-edition.component.html',
  styleUrls: ['./user-edition.component.css']
})
export class UserEditionComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  rolList: RolModel[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UserService,
    private route: ActivatedRoute,
    private rolService:RolService

  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
    this.GetDataForSelects();

  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      _id: ["", Validators.required],
      correo: ["", [Validators.required, Validators.email]],
      apellido: ["", [Validators.required]],
      id_rol: ["", [Validators.required]],
      celular: ["", [Validators.required]],
      nombre: ["", [Validators.required]]

    });
  }

  SearchRecord() {
    let id = this.route.snapshot.params["_id"];


    this.service.SearchRecord(id).subscribe({
      next: (data: UserModel) => {
        this.GetDF["_id"].setValue(data._id);
        this.GetDF["correo"].setValue(data.correo);
        this.GetDF["apellido"].setValue(data.apellido);
        this.GetDF["id_rol"].setValue(data.id_rol);
        this.GetDF["nombre"].setValue(data.nombre);

        this.GetDF["celular"].setValue(data.celular);

      }
    });
  }


  saveRecord() {
    let model = new UserModel();
    model._id = this.GetDF["_id"].value;
    model.nombre = this.GetDF["nombre"].value;
    model.correo = this.GetDF["correo"].value;
    model.celular = this.GetDF["celular"].value;
    model.apellido = this.GetDF["apellido"].value;
    model.id_rol = this.GetDF["id_rol"].value;




    this.service.EditRecord(model).subscribe({
      next: (data: UserModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
        this.router.navigate(["security/user-list"])
      }
    });
  }

  GetDataForSelects() {
    this.rolService.GetRecordList().subscribe({
      next: (data: RolModel[]) => {
        this.rolList = data;
        setTimeout(() => {
          InitSelect("selRol");

        }, 100);

      }
    });
  }
  get GetDF() {
    return this.dataForm.controls;
  }

}
