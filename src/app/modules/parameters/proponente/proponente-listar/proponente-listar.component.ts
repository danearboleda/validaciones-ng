import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProponenteModel } from 'src/app/models/proponente.model';
import { ProponenteService } from 'src/app/service/parameters/proponente.service';

@Component({
  selector: 'app-proponente-listar',
  templateUrl: './proponente-listar.component.html',
  styleUrls: ['./proponente-listar.component.css']
})
export class ProponenteListarComponent implements OnInit {

  recordList: ProponenteModel[]=[];
url:string=ConfigurationData.BUSSINESS2_MS_URL;
  constructor(private service: ProponenteService) { }

  ngOnInit(): void {
    this.showRecordList();
  }
showRecordList(){
  this.service.GetRecordList().subscribe(
   { next:(data: ProponenteModel[])=>{
      this.recordList=data;
    },
    error:(err)=>{
      console.log(err);
    }
   });
}

}
