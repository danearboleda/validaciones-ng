import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsolicitudJuradoComponent } from './evaluacion_solicitud/esolicitud-jurado/esolicitud-jurado.component';
import { EsolicitudSolicitudComponent } from './evaluacion_solicitud/esolicitud-solicitud/esolicitud-solicitud.component';
import { SolicitudComiteComponent } from './solicitud/solicitud-comite/solicitud-comite.component';
import { SolicitudInvestigacionComponent } from './solicitud/solicitud-investigacion/solicitud-investigacion.component';
import { SolicitudModalidadComponent } from './solicitud/solicitud-modalidad/solicitud-modalidad.component';

const routes: Routes = [
  {
    path:"solicitud-modalidad",
    component: SolicitudModalidadComponent
  },
  {
    path:"solicitud-comite",
    component: SolicitudComiteComponent
  },
  {
    path:"solicitud-investigacion",
    component: SolicitudInvestigacionComponent
  },
  {
    path:"esolicitud-solicitud",
    component: EsolicitudSolicitudComponent
  },
  {
    path:"esolicitud-jurado",
    component: EsolicitudJuradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
