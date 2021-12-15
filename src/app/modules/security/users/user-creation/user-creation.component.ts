import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { RolModel } from 'src/app/models/rol.model';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/parameters/service/user-service.service';
import { RolService } from 'src/app/security/services/rol.service';

declare const ShowGeneralMessage: any;
declare const InitSelect: any;

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {


  dataForm: FormGroup = new FormGroup({});
  rolList: RolModel[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UserService,
    private rolService:RolService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.GetDataForSelects();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      id_rol: ["", [Validators.required]],
      correo: ["", [Validators.required, Validators.email]],
      telefono: ["", [Validators.required]],
      celular: ["", [Validators.required]]
    });
  }

  saveRecord() {
    let model = new UserModel();
    model.nombre = this.GetDF["nombre"].value;
    model.correo = this.GetDF["correo"].value;
    model.celular = this.GetDF["celular"].value;
    model.apellido = this.GetDF["apellido"].value;
    model.id_rol = this.GetDF["id_rol"].value;



    this.service.saveRecord(model).subscribe({
      next: (data: UserModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
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
