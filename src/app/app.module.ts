import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordatorioCrearComponent } from './modules/parametersrecordatorio/recordatorio-crear/recordatorio-crear.component';
import { CsolicitudCrearComponent } from './modules/parametercomite_solicitud/csolicitud-crear/csolicitud-crear.component';
import { CsolicitudEditarComponent } from './modules/parametercomite_solicitud/csolicitud-editar/csolicitud-editar.component';
import { CsolicitudListarComponent } from './modules/parametercomite_solicitud/csolicitud-listar/csolicitud-listar.component';
import { CsolicitudRemoverComponent } from './modules/parametercomite_solicitud/csolicitud-remover/csolicitud-remover.component';
import { SolicitudesCrearComponent } from './modulessolicitudes/solicitudes/solicitudes-crear/solicitudes-crear.component';
import { SolicitudesListarComponent } from './modulessolicitudes/solicitudes/solicitudes-listar/solicitudes-listar.component';
import { SolicitudesEditarComponent } from './modulessolicitudes/solicitudes/solicitudes-editar/solicitudes-editar.component';
import { SolicitudesAnularComponent } from './modulessolicitudes/solicitudes/solicitudes-anular/solicitudes-anular.component';
import { EsolicitudJuradoComponent } from './modules/reporevaluacion_solicitud/esolicitud-jurado/esolicitud-jurado.component';
import { EsolicitudSolicitudComponent } from './modules/reporevaluacion_solicitud/esolicitud-solicitud/esolicitud-solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordatorioCrearComponent,
    CsolicitudCrearComponent,
    CsolicitudEditarComponent,
    CsolicitudListarComponent,
    CsolicitudRemoverComponent,
    SolicitudesCrearComponent,
    SolicitudesListarComponent,
    SolicitudesEditarComponent,
    SolicitudesAnularComponent,
    EsolicitudJuradoComponent,
    EsolicitudSolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
