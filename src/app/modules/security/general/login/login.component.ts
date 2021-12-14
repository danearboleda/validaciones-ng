import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { UserCredentialsModel } from 'src/app/models/user-credentials.model';
import { SecurityService } from 'src/app/service/shared/security.service';
import { MD5 } from 'crypto-js';
import { SessionDataModel } from 'src/app/models/session-data.model';
import { LocalStorageService } from 'src/app/service/shared/local-storage.service';
import { Router } from '@angular/router';



declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  aFormGroup: FormGroup=new FormGroup({});
  siteKey:string="";

  constructor(
    private fb: FormBuilder,
    private securityService: SecurityService,
  private localStorageService: LocalStorageService,
  private router: Router, private formBuilder: FormBuilder
    ) { 
      this.siteKey="6LdKG6EdAAAAAC8zHJm_wPCcaUXy37cvhSuxG9s7";

    }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
    this.FormBuilding();
   
  }



  FormBuilding() {
    this.dataForm = this.fb.group({
      username: ["", [Validators.required, Validators.email, Validators.minLength(ConfigurationData.EMAIL_MIN_LENGHT)]],
      password: ["", [Validators.required, Validators.minLength(ConfigurationData.PASSWORD_MIN_LENGHT)]]
    });
  }

  Login() {
    if(this.aFormGroup.invalid){
      ShowGeneralMessage(ConfigurationData.INVALID_RECAPTCHA);

    }
    if (this.dataForm.invalid ) {
      ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
    }else{
      let credentials = new UserCredentialsModel();
      credentials.username = this.GetDF["username"].value;
      credentials.password = MD5(this.GetDF["password"].value).toString();
      this.securityService.Login(credentials).subscribe({
        next:(data: SessionDataModel)=>{
        console.log(data);
       let saved= this.localStorageService.SaveSessionData(data);
      data.isLoggedIn=true;
      this.securityService.RefreshSessionInfo(data);
     this.router.navigate(["/home"])
    },
      error: (error:any)=>
      {

      },
      complete: ()=>{

      }}
      );
      }
    }

  get GetDF() {
    return this.dataForm.controls;
  }
 
  
  }

