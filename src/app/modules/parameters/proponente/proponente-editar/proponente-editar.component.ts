import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { DepartamentoModel } from 'src/app/models/departamento.model';
import { ProponenteModel } from 'src/app/models/proponente.model';
import { UploadedFile } from 'src/app/models/uploaded.file.model';

import { TipoVinculacionModel } from 'src/app/models/tipoViculacion.model';
import { DepartamentoService } from 'src/app/service/parameters/departamento.service';
import { ProponenteService } from 'src/app/service/parameters/proponente.service';
import { TipoVinculacionService } from 'src/app/service/parameters/tipo-vinculacion.service';
declare const ShowGeneralMessage: any;
declare const InitSelect:any;

@Component({
  selector: 'app-proponente-editar',
  templateUrl: './proponente-editar.component.html',
  styleUrls: ['./proponente-editar.component.css']
})
export class ProponenteEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  FotodataForm: FormGroup = new FormGroup({});
  uploadedPhoto:boolean=false;
  uploadedFileName?:string="";
  url_server:string=ConfigurationData.BUSSINESS2_MS_URL;
  vinculoList: TipoVinculacionModel[]=[];
  departamentoList: DepartamentoModel[]=[];
  constructor(
    private fb: FormBuilder,
  private router: Router,
  private service: ProponenteService,
  private route: ActivatedRoute,
  private VinculacionService: TipoVinculacionService,
  private departamentoService: DepartamentoService
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.searchRecord();
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
      id: ["", [Validators.required]],
      p_nombre: ["", [Validators.required]],
      correo: ["", [Validators.required, Validators.email]],
      telefono: ["", []],
      documento: ["", [Validators.required]],
      idJurado: ["", [Validators.required]],
      s_name: ["", [Validators.required]],
      s_apellido: ["", [Validators.required]],
      p_apellido: ["", [Validators.required]],
      id_vinculacion: ["", [Validators.required]],
      id_departamento: ["", [Validators.required]],

      foto: ["", []]
     
    });
  }
  SearchRecord(){
    let id=this.route.snapshot.params["id"];


this.service.SearchRecord(id).subscribe({
next:(data: ProponenteModel)=>{
this.GetDF["id"].setValue(data.id);
this.GetDF["correo"].setValue(data.correo);
this.GetDF["foto"].setValue(data.Foto);
this.GetDF["id_vinculacion"].setValue(data.id_vinculacion);
this.GetDF["id_departamento"].setValue(data.id_departamento);
this.GetDF["documento"].setValue(data.documento);

this.GetDF["s_name"].setValue(data.OtroNombre);
this.GetDF["p_apellido"].setValue(data.PrimerApellido);
this.GetDF["p_nombre"].setValue(data.PrimerNombre);
this.GetDF["s_apellido"].setValue(data.SegundoApellido);
this.GetDF["telefono"].setValue(data.numCelular);

}
});
  }

  GetDataForSelects(){
    this.VinculacionService.GetRecordList().subscribe({
      next: (data: TipoVinculacionModel[])=>{
        this.vinculoList= data;

        setTimeout(()=>{
          InitSelect("selVinculo");
         
        },100);
      }
    });
    this.departamentoService.GetRecordList().subscribe({
      next: (data: DepartamentoModel[])=>{
        this.departamentoList= data;

        setTimeout(()=>{
          InitSelect("selDepartamento");
         
        },100);
      }
    });
  }

  saveRecord(){
    let model=new ProponenteModel();
    model.correo=this.GetDF["correo"].value;
    model.Foto=this.GetDF["foto"].value;
    model.id=this.GetDF["id"].value;
    model.id_vinculacion=parseInt(this.GetDF["id_vinculacion"].value);
    model.id_departamento=parseInt(this.GetDF["id_departamento"].value);

    model.OtroNombre=this.GetDF["s_name"].value;
    model.PrimerApellido=this.GetDF["p_apellido"].value;
    model.PrimerNombre=this.GetDF["p_nombre"].value;
    model.SegundoApellido=this.GetDF["s_apellido"].value;
    model.numCelular=this.GetDF["telefono"].value;
    model.documento=this.GetDF["documento"].value;
    console.log((model.Foto));




this.service.EditRecord(model).subscribe({
next:(data: ProponenteModel)=>{
ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
this.router.navigate(["parameters/proponente-listar"])
}
});
  }

  searchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: ProponenteModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["p_nombre"].setValue(data.PrimerNombre);
        this.GetDF["s_name"].setValue(data.OtroNombre);
        this.GetDF["p_apellido"].setValue(data.PrimerApellido);
        this.GetDF["s_apellido"].setValue(data.SegundoApellido);
        this.GetDF["correo"].setValue(data.correo);
        this.GetDF["telefono"].setValue(data.numCelular);
        this.GetDF["foto"].setValue(data.Foto);
        this.GetDF["id_vinculacion"].setValue(data.id_vinculacion);
        this.GetDF["id_departamento"].setValue(data.id_departamento);
        this.GetDF["documento"].setValue(data.documento);
  
      }
    });
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

  get GetDF() {
    return this.dataForm.controls;
  }


}
