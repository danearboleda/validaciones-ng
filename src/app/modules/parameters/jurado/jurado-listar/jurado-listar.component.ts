import { Component, OnInit } from '@angular/core';
import { JuradoModel } from 'src/app/models/jurado.model';
import { JuradoService } from 'src/app/service/parameters/jurado.service';

@Component({
  selector: 'app-jurado-listar',
  templateUrl: './jurado-listar.component.html',
  styleUrls: ['./jurado-listar.component.css']
})
export class JuradoListarComponent implements OnInit {

  recordList: JuradoModel[]=[];
  constructor(private service: JuradoService) { }

  ngOnInit(): void {
    this.showRecordList();
  }
showRecordList(){
  this.service.GetRecordList().subscribe(
   { next:(data: JuradoModel[])=>{
      this.recordList=data;
    }
   });
}

}
