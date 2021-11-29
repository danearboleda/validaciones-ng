import { Component, OnInit } from '@angular/core';
import { TipoVinculacionModel } from 'src/app/models/tipoViculacion.model';
import { TipoVinculacionService } from 'src/app/service/parameters/tipo-vinculacion.service';

@Component({
  selector: 'app-vinculacion-listar',
  templateUrl: './vinculacion-listar.component.html',
  styleUrls: ['./vinculacion-listar.component.css']
})
export class VinculacionListarComponent implements OnInit {

  recordList: TipoVinculacionModel[]=[];
  constructor(private service: TipoVinculacionService) { }

  ngOnInit(): void {
    this.showRecordList();
  }
showRecordList(){
  this.service.GetRecordList().subscribe(
   { next:(data: TipoVinculacionModel[])=>{
      this.recordList=data;
    }
   });
}

}
