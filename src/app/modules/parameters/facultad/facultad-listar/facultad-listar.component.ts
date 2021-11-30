import { Component, OnInit } from '@angular/core';
import { FacultadModel } from 'src/app/models/facultad.model';
import { FacultadService } from 'src/app/service/parameters/facultad.service';

@Component({
  selector: 'app-facultad-listar',
  templateUrl: './facultad-listar.component.html',
  styleUrls: ['./facultad-listar.component.css']
})
export class FacultadListarComponent implements OnInit {

 
  recordList: FacultadModel[]=[];
  constructor(private service: FacultadService) { }

  ngOnInit(): void {
    this.showRecordList();
  }
showRecordList(){
  this.service.GetRecordList().subscribe(
   { next:(data: FacultadModel[])=>{
      this.recordList=data;
    }
   });
}

}
