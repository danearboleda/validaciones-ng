import { Component, OnInit } from '@angular/core';
import { ComiteService } from 'src/app/service/parameters/comite.service';
import { ComiteModel } from '../../comite.model';

@Component({
  selector: 'app-comite-listar',
  templateUrl: './comite-listar.component.html',
  styleUrls: ['./comite-listar.component.css']
})
export class ComiteListarComponent implements OnInit {
recordList: ComiteModel[]=[];
  constructor(private service: ComiteService) { }

  ngOnInit(): void {
    this.showRecordList();
  }
showRecordList(){
  this.service.GetRecordList().subscribe(
   { next:(data: ComiteModel[])=>{
      this.recordList=data;
    }
   });
}
}
