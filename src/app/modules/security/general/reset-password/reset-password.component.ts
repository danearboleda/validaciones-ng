import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { RecuperarClaveModel } from 'src/app/models/recuperar-clave.model';
import { RecuperarClaveService } from 'src/app/service/shared/recuperar-clave.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private service: RecuperarClaveService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      correo: ["", [Validators.required]]
    });
  }

  

  get GetDF() {
    return this.dataForm.controls;
  }


  recuperarClave() {
    let model = new RecuperarClaveModel();
    model.correo = this.GetDF["correo"].value;
  



    this.service.RecuperarClave(model).subscribe({
      next: (data: RecuperarClaveModel) => {
        ShowGeneralMessage(ConfigurationData.KEY_RECOVERED);
        this.router.navigate(["/home"])
      }
    });
  }
  

}
