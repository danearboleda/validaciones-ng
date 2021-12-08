import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsolicitudAnularComponent } from './evaluacion_solicitud/esolicitud-anular/esolicitud-anular.component';
import { EsolicitudCrearComponent } from './evaluacion_solicitud/esolicitud-crear/esolicitud-crear.component';
import { EsolicitudEditarComponent } from './evaluacion_solicitud/esolicitud-editar/esolicitud-editar.component';
import { EsolicitudListarComponent } from './evaluacion_solicitud/esolicitud-listar/esolicitud-listar.component';
import { EvaluacionAnularComponent } from './resultado_evaluacion/evaluacion-anular/evaluacion-anular.component';
import { EvaluacionCrearComponent } from './resultado_evaluacion/evaluacion-crear/evaluacion-crear.component';
import { EvaluacionEditarComponent } from './resultado_evaluacion/evaluacion-editar/evaluacion-editar.component';
import { EvaluacionListarComponent } from './resultado_evaluacion/evaluacion-listar/evaluacion-listar.component';
import { SolicitudesAnularComponent } from './solicitudes/solicitudes-anular/solicitudes-anular.component';
import { SolicitudesCrearComponent } from './solicitudes/solicitudes-crear/solicitudes-crear.component';
import { SolicitudesEditarComponent } from './solicitudes/solicitudes-editar/solicitudes-editar.component';
import { SolicitudesListarComponent } from './solicitudes/solicitudes-listar/solicitudes-listar.component';

const routes: Routes = [
  {
    path:"solicitudes-crear",
    component: SolicitudesCrearComponent
  },
  {
    path:"solicitudes-editar/:id",
    component: SolicitudesEditarComponent
  },
  {
    path:"solicitudes-listar",
    component: SolicitudesListarComponent
  },
  {
    path:"solicitudes-anular/:id",
    component: SolicitudesAnularComponent
  },
  {
    path:"esolicitud-crear",
    component: EsolicitudCrearComponent
  },
  {
    path:"esolicitud-editar/:id",
    component: EsolicitudEditarComponent
  },
  {
    path:"esolicitud-listar",
    component: EsolicitudListarComponent
  },
  {
    path:"esolicitud-anular",
    component: EsolicitudAnularComponent
  },
  {
    path:"evaluacion-crear",
    component: EvaluacionCrearComponent
  },
  {
    path:"evaluacion-editar/:id",
    component: EvaluacionEditarComponent
  },
  {
    path:"evaluacion-listar",
    component: EvaluacionListarComponent
  },
  {
    path:"evaluacion-anular",
    component: EvaluacionAnularComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
