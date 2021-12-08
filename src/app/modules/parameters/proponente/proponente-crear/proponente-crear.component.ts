import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { DepartamentoModel } from 'src/app/models/departamento.model';
import { ProponenteModel } from 'src/app/models/proponente.model';
import { TipoVinculacionModel } from 'src/app/models/tipoViculacion.model';
import { UploadedFile } from 'src/app/models/uploaded.file.model';
import { DepartamentoService } from 'src/app/service/parameters/departamento.service';
import { ProponenteService } from 'src/app/service/parameters/proponente.service';
import { TipoVinculacionService } from 'src/app/service/parameters/tipo-vinculacion.service';
declare const ShowGeneralMessage: any;
declare const InitSelects:any;
@Component({
  selector: 'app-proponente-crear',
  templateUrl: './proponente-crear.component.html',
  styleUrls: ['./proponente-crear.component.css']
})
export class ProponenteCrearComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  FotodataForm: FormGroup = new FormGroup({});
uploadedPhoto:boolean=false;
  vinculoList: TipoVinculacionModel[]=[];
  departamentoList: DepartamentoModel[]=[];

  uploadedFileName?:string="";
  url_server:string=ConfigurationData.BUSSINESS2_MS_URL;
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: ProponenteService,
  private VinculacionService: TipoVinculacionService,
  private departamentoService: DepartamentoService

    ) { }

    GetDataForSelects(){
      this.VinculacionService.GetRecordList().subscribe({
        next: (data: TipoVinculacionModel[])=>{
          this.vinculoList= data;
  
          setTimeout(()=>{
            InitSelects("selVinculo");
           
          },100);
        }
      });
      this.departamentoService.GetRecordList().subscribe({
        next: (data: DepartamentoModel[])=>{
          this.departamentoList= data;
  
          setTimeout(()=>{
            InitSelects("selDepartamento");
           
          },100);
        }
      });
    }

  ngOnInit(): void {
    this.FormBuilding();
   this.GetDataForSelects();
   this.FormFoto();
  }

  FormFoto(){
   this.FotodataForm=this.fb.group({
file:["",[]]
   });
  }
  FormBuilding() {
    this.dataForm = this.fb.group({
      p_nombre: ["", [Validators.required]],
      correo: ["", [Validators.required, Validators.email]],
      telefono: ["", []],
      documento: ["", [Validators.required]],
      idJurado: ["", [Validators.required]],
      s_name: ["", [Validators.required]],
      s_apellido: ["", [Validators.required]],
      p_apellido: ["", [Validators.required]],
      id_vinculacion: ["", [Validators.required]],
      foto: ["", []],
      id_departamento: ["", []]
     
    });
  }

  saveRecord(){
    let model=new ProponenteModel();
    model.correo=this.GetDF["correo"].value;
    model.Foto=this.GetDF["foto"].value;
    model.id_vinculacion=parseInt(this.GetDF["id_vinculacion"].value);
    model.id_departamento=parseInt(this.GetDF["id_departamento"].value);

    model.OtroNombre=this.GetDF["s_name"].value;
    model.PrimerApellido=this.GetDF["p_apellido"].value;
    model.PrimerNombre=this.GetDF["p_nombre"].value;
    model.SegundoApellido=this.GetDF["s_apellido"].value;
    model.numCelular=this.GetDF["telefono"].value;
    model.documento=this.GetDF["documento"].value;

this.service.saveRecord(model).subscribe({
next:(data: ProponenteModel)=>{
ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
this.router.navigate(["parameters/proponente-listar"])
}
});
  }

  get GetDF() {
    return this.dataForm.controls;
  }


  UploadPhoto(event:any){
if(event.target.files.length>0){
  const file=event.target.files[0];
  this.FotodataForm.controls["file"].setValue(file);
//this.SubmitFileToServer();
}
  }

SubmitFileToServer(){
  const form=new FormData();
  form.append("file", this.FotodataForm.controls["file"].value);
this.service.UploadFoto(form).subscribe({
  next: (data:UploadedFile)=>{
    this.dataForm.controls["foto"].setValue(data.filename);
  this.uploadedPhoto=true;
  this.uploadedFileName=data.filename;
  }
})
}
}
