import { Component, OnInit } from '@angular/core';
import { ModalidadModel } from 'src/app/models/modalidad.model';
import { ModalidadService } from 'src/app/service/parameters/modalidad.service';

@Component({
  selector: 'app-modalidad-listar',
  templateUrl: './modalidad-listar.component.html',
  styleUrls: ['./modalidad-listar.component.css']
})
export class ModalidadListarComponent implements OnInit {
  recordList: ModalidadModel[]=[];

  constructor(private service: ModalidadService) { }

  ngOnInit(): void {
    this.showRecordList();
  }
showRecordList(){
  this.service.GetRecordList().subscribe(
   { next:(data: ModalidadModel[])=>{
      this.recordList=data;
    }
   });
}

}
