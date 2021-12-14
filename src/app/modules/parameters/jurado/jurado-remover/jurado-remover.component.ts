import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { JuradoModel } from 'src/app/models/jurado.model';
import { JuradoService } from 'src/app/service/parameters/jurado.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-jurado-remover',
  templateUrl: './jurado-remover.component.html',
  styleUrls: ['./jurado-remover.component.css']
})
export class JuradoRemoverComponent implements OnInit {

  id: number = 0;
  id_tipoJurado: any = 0;
  correo: any;
  entidad: any;
  nombre: any;
  telefono: any;


  constructor(

    private router: Router,
    private service: JuradoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.SearchRecord();
  }


  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: JuradoModel) => {
        if (data.id) {
          this.id = data.id;
          this.nombre = data.nombre;
        }
      }
    });
  }
  removeRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
        this.router.navigate(["parameters/jurado-listar"])
      }
    });
  }

}
