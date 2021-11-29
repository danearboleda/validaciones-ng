import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { SolicitudesCrearComponent } from './solicitudes/solicitudes-crear/solicitudes-crear.component';
import { SolicitudesListarComponent } from './solicitudes/solicitudes-listar/solicitudes-listar.component';
import { SolicitudesEditarComponent } from './solicitudes/solicitudes-editar/solicitudes-editar.component';
import { SolicitudesAnularComponent } from './solicitudes/solicitudes-anular/solicitudes-anular.component';
import { EsolicitudCrearComponent } from './evaluacion_solicitud/esolicitud-crear/esolicitud-crear.component';
import { EsolicitudListarComponent } from './evaluacion_solicitud/esolicitud-listar/esolicitud-listar.component';
import { EsolicitudEditarComponent } from './evaluacion_solicitud/esolicitud-editar/esolicitud-editar.component';
import { EsolicitudAnularComponent } from './evaluacion_solicitud/esolicitud-anular/esolicitud-anular.component';
import { EvaluacionCrearComponent } from './resultado_evaluacion/evaluacion-crear/evaluacion-crear.component';
import { EvaluacionListarComponent } from './resultado_evaluacion/evaluacion-listar/evaluacion-listar.component';
import { EvaluacionEditarComponent } from './resultado_evaluacion/evaluacion-editar/evaluacion-editar.component';
import { EvaluacionAnularComponent } from './resultado_evaluacion/evaluacion-anular/evaluacion-anular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SolicitudesCrearComponent,
    SolicitudesListarComponent,
    SolicitudesEditarComponent,
    SolicitudesAnularComponent,
    EsolicitudCrearComponent,
    EsolicitudListarComponent,
    EsolicitudEditarComponent,
    EsolicitudAnularComponent,
    EvaluacionCrearComponent,
    EvaluacionListarComponent,
    EvaluacionEditarComponent,
    EvaluacionAnularComponent
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SolicitudesModule { }
