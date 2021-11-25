import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { SolicitudModalidadComponent } from './solicitud/solicitud-modalidad/solicitud-modalidad.component';
import { SolicitudComiteComponent } from './solicitud/solicitud-comite/solicitud-comite.component';
import { SolicitudInvestigacionComponent } from './solicitud/solicitud-investigacion/solicitud-investigacion.component';
import { EsolicitudSolicitudComponent } from './evaluacion_solicitud/esolicitud-solicitud/esolicitud-solicitud.component';


@NgModule({
  declarations: [
    SolicitudModalidadComponent,
    SolicitudComiteComponent,
    SolicitudInvestigacionComponent,
    EsolicitudSolicitudComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
