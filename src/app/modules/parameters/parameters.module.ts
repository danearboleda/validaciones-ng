import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { DepartamentoCrearComponent } from './departamento/departamento-crear/departamento-crear.component';
import { DepartamentoEditarComponent } from './departamento/departamento-editar/departamento-editar.component';
import { DepartamentoListarComponent } from './departamento/departamento-listar/departamento-listar.component';
import { DepartamentoRemoverComponent } from './departamento/departamento-remover/departamento-remover.component';
import { FacultadCrearComponent } from './facultad/facultad-crear/facultad-crear.component';
import { FacultadEditarComponent } from './facultad/facultad-editar/facultad-editar.component';
import { FacultadListarComponent } from './facultad/facultad-listar/facultad-listar.component';
import { FacultadRemoverComponent } from './facultad/facultad-remover/facultad-remover.component';
import { ModalidadCrearComponent } from './modalidad/modalidad-crear/modalidad-crear.component';
import { ModalidadEditarComponent } from './modalidad/modalidad-editar/modalidad-editar.component';
import { ModalidadListarComponent } from './modalidad/modalidad-listar/modalidad-listar.component';
import { ModalidadRemoverComponent } from './modalidad/modalidad-remover/modalidad-remover.component';
import { RecordatorioCrearComponent } from './recordatorio/recordatorio-crear/recordatorio-crear.component';
import { RecordatorioEditarComponent } from './recordatorio/recordatorio-editar/recordatorio-editar.component';
import { RecordatorioListarComponent } from './recordatorio/recordatorio-listar/recordatorio-listar.component';
import { RecordatorioRemoverComponent } from './recordatorio/recordatorio-remover/recordatorio-remover.component';
import { ComiteCrearComponent } from './comite/comite-crear/comite-crear.component';
import { ComiteEditarComponent } from './comite/comite-editar/comite-editar.component';
import { ComiteListarComponent } from './comite/comite-listar/comite-listar.component';
import { ComiteRemoverComponent } from './comite/comite-remover/comite-remover.component';
import { TsolicitudCrearComponent } from './tipo_solicitud/tsolicitud-crear/tsolicitud-crear.component';
import { TsolicitudEditarComponent } from './tipo_solicitud/tsolicitud-editar/tsolicitud-editar.component';
import { TsolicitudListarComponent } from './tipo_solicitud/tsolicitud-listar/tsolicitud-listar.component';
import { TsolicitudRemoverComponent } from './tipo_solicitud/tsolicitud-remover/tsolicitud-remover.component';
import { InvestigacionCrearComponent } from './linea_investigacion/investigacion-crear/investigacion-crear.component';
import { InvestigacionEditarComponent } from './linea_investigacion/investigacion-editar/investigacion-editar.component';
import { InvestigacionListarComponent } from './linea_investigacion/investigacion-listar/investigacion-listar.component';
import { InvestigacionRemoverComponent } from './linea_investigacion/investigacion-remover/investigacion-remover.component';
import { VinculacionCrearComponent } from './tipo_vinculacion/vinculacion-crear/vinculacion-crear.component';
import { VinculacionEditarComponent } from './tipo_vinculacion/vinculacion-editar/vinculacion-editar.component';
import { VinculacionListarComponent } from './tipo_vinculacion/vinculacion-listar/vinculacion-listar.component';
import { VinculacionRemoverComponent } from './tipo_vinculacion/vinculacion-remover/vinculacion-remover.component';
import { JuradoCrearComponent } from './jurado/jurado-crear/jurado-crear.component';
import { JuradoEditarComponent } from './jurado/jurado-editar/jurado-editar.component';
import { JuradoListarComponent } from './jurado/jurado-listar/jurado-listar.component';
import { JuradoRemoverComponent } from './jurado/jurado-remover/jurado-remover.component';
import { ProponenteCrearComponent } from './proponente/proponente-crear/proponente-crear.component';
import { ProponenteEditarComponent } from './proponente/proponente-editar/proponente-editar.component';
import { ProponenteListarComponent } from './proponente/proponente-listar/proponente-listar.component';
import { ProponenteRemoverComponent } from './proponente/proponente-remover/proponente-remover.component';
import { CsolicitudCrearComponent } from './comite_solicitud/csolicitud-crear/csolicitud-crear.component';
import { CsolicitudEditarComponent } from './comite_solicitud/csolicitud-editar/csolicitud-editar.component';
import { CsolicitudListarComponent } from './comite_solicitud/csolicitud-listar/csolicitud-listar.component';
import { CsolicitudRemoverComponent } from './comite_solicitud/csolicitud-remover/csolicitud-remover.component';


@NgModule({
  declarations: [
    DepartamentoCrearComponent,
    DepartamentoEditarComponent,
    DepartamentoListarComponent,
    DepartamentoRemoverComponent,
    FacultadCrearComponent,
    FacultadEditarComponent,
    FacultadListarComponent,
    FacultadRemoverComponent,
    ModalidadCrearComponent,
    ModalidadEditarComponent,
    ModalidadListarComponent,
    ModalidadRemoverComponent,
    RecordatorioCrearComponent,
    RecordatorioEditarComponent,
    RecordatorioListarComponent,
    RecordatorioRemoverComponent,
    ComiteCrearComponent,
    ComiteEditarComponent,
    ComiteListarComponent,
    ComiteRemoverComponent,
    TsolicitudCrearComponent,
    TsolicitudEditarComponent,
    TsolicitudListarComponent,
    TsolicitudRemoverComponent,
    InvestigacionCrearComponent,
    InvestigacionEditarComponent,
    InvestigacionListarComponent,
    InvestigacionRemoverComponent,
    VinculacionCrearComponent,
    VinculacionEditarComponent,
    VinculacionListarComponent,
    VinculacionRemoverComponent,
    JuradoCrearComponent,
    JuradoEditarComponent,
    JuradoListarComponent,
    JuradoRemoverComponent,
    ProponenteCrearComponent,
    ProponenteEditarComponent,
    ProponenteListarComponent,
    ProponenteRemoverComponent,
    CsolicitudCrearComponent,
    CsolicitudEditarComponent,
    CsolicitudListarComponent,
    CsolicitudRemoverComponent
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }
