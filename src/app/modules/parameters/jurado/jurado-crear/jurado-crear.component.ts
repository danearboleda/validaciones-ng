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
      entidad: ["", [Validators.required]]
    });
  }

  saveRecord() {
    let model = new JuradoModel();
    model.nombre = this.GetDF["name"].value;
    model.correo = this.GetDF["correo"].value;
    model.telefono = this.GetDF["tel"].value;
    model.entidad = this.GetDF["entidad"].value;
    model.id_tipo_jurado = 1;



    this.service.saveRecord(model).subscribe({
      next: (data: JuradoModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(["parameters/jurado-listar"])
      }
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  public records: any[] = [];
  uploadListener($event: any): void {
    let text = [];
    let files = $event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        let csvData = reader.result;
        console.log("hola");
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = this.getHeaderArray(csvRecordsArray);
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };
      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        let csvRecord: JuradoModel = new JuradoModel();
        csvRecord.id = parseInt(curruntRecord[0].trim());
        csvRecord.nombre = curruntRecord[1].trim();
        csvRecord.entidad = curruntRecord[2].trim();
        csvRecord.telefono = curruntRecord[3].trim();
        csvRecord.correo = curruntRecord[4].trim();
        csvRecord.id_tipo_jurado= parseInt(curruntRecord[5].trim());
        console.log(csvRecord.nombre);
        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }
  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }
  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }
  fileReset() {
    this.records = [];
  }
  saveFromCSV(){
    for(let i of this.records){
      let model = new JuradoModel();
      model.nombre = i.nombre;
      model.correo = i.correo;
      model.telefono = i.telefono;
      model.entidad = i.entidad;
      model.id_tipo_jurado = i.id_tipo_jurado;
  
  
  
      this.service.saveRecord(model).subscribe({
        next: (data: JuradoModel) => {
       
        }
      });
    }
  }

}
