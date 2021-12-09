import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { ComiteCrearComponent } from './comite/comite-crear/comite-crear.component';
import { ComiteEditarComponent } from './comite/comite-editar/comite-editar.component';
import { ComiteListarComponent } from './comite/comite-listar/comite-listar.component';
import { ComiteRemoverComponent } from './comite/comite-remover/comite-remover.component';
import { CsolicitudCrearComponent } from './comite_solicitud/csolicitud-crear/csolicitud-crear.component';
import { CsolicitudEditarComponent } from './comite_solicitud/csolicitud-editar/csolicitud-editar.component';
import { CsolicitudListarComponent } from './comite_solicitud/csolicitud-listar/csolicitud-listar.component';
import { CsolicitudRemoverComponent } from './comite_solicitud/csolicitud-remover/csolicitud-remover.component';
import { DepartamentoCrearComponent } from './departamento/departamento-crear/departamento-crear.component';
import { DepartamentoEditarComponent } from './departamento/departamento-editar/departamento-editar.component';
import { DepartamentoListarComponent } from './departamento/departamento-listar/departamento-listar.component';
import { DepartamentoRemoverComponent } from './departamento/departamento-remover/departamento-remover.component';
import { FacultadCrearComponent } from './facultad/facultad-crear/facultad-crear.component';
import { FacultadEditarComponent } from './facultad/facultad-editar/facultad-editar.component';
import { FacultadListarComponent } from './facultad/facultad-listar/facultad-listar.component';
import { FacultadRemoverComponent } from './facultad/facultad-remover/facultad-remover.component';
import { JuradoCrearComponent } from './jurado/jurado-crear/jurado-crear.component';
import { JuradoEditarComponent } from './jurado/jurado-editar/jurado-editar.component';
import { JuradoListarComponent } from './jurado/jurado-listar/jurado-listar.component';
import { JuradoRemoverComponent } from './jurado/jurado-remover/jurado-remover.component';
import { InvestigacionCrearComponent } from './linea_investigacion/investigacion-crear/investigacion-crear.component';
import { InvestigacionEditarComponent } from './linea_investigacion/investigacion-editar/investigacion-editar.component';
import { InvestigacionListarComponent } from './linea_investigacion/investigacion-listar/investigacion-listar.component';
import { InvestigacionRemoverComponent } from './linea_investigacion/investigacion-remover/investigacion-remover.component';
import { ModalidadCrearComponent } from './modalidad/modalidad-crear/modalidad-crear.component';
import { ModalidadEditarComponent } from './modalidad/modalidad-editar/modalidad-editar.component';
import { ModalidadListarComponent } from './modalidad/modalidad-listar/modalidad-listar.component';
import { ModalidadRemoverComponent } from './modalidad/modalidad-remover/modalidad-remover.component';
import { ProponenteCrearComponent } from './proponente/proponente-crear/proponente-crear.component';
import { ProponenteEditarComponent } from './proponente/proponente-editar/proponente-editar.component';
import { ProponenteListarComponent } from './proponente/proponente-listar/proponente-listar.component';
import { ProponenteRemoverComponent } from './proponente/proponente-remover/proponente-remover.component';
import { RecordatorioCrearComponent } from './recordatorio/recordatorio-crear/recordatorio-crear.component';
import { RecordatorioEditarComponent } from './recordatorio/recordatorio-editar/recordatorio-editar.component';
import { RecordatorioListarComponent } from './recordatorio/recordatorio-listar/recordatorio-listar.component';
import { RecordatorioRemoverComponent } from './recordatorio/recordatorio-remover/recordatorio-remover.component';
import { TsolicitudCrearComponent } from './tipo_solicitud/tsolicitud-crear/tsolicitud-crear.component';
import { TsolicitudEditarComponent } from './tipo_solicitud/tsolicitud-editar/tsolicitud-editar.component';
import { TsolicitudListarComponent } from './tipo_solicitud/tsolicitud-listar/tsolicitud-listar.component';
import { TsolicitudRemoverComponent } from './tipo_solicitud/tsolicitud-remover/tsolicitud-remover.component';
import { VinculacionCrearComponent } from './tipo_vinculacion/vinculacion-crear/vinculacion-crear.component';
import { VinculacionEditarComponent } from './tipo_vinculacion/vinculacion-editar/vinculacion-editar.component';
import { VinculacionListarComponent } from './tipo_vinculacion/vinculacion-listar/vinculacion-listar.component';
import { VinculacionRemoverComponent } from './tipo_vinculacion/vinculacion-remover/vinculacion-remover.component';

const routes: Routes = [
  {
    path:"departamento-crear",
    component: DepartamentoCrearComponent,
    canActivate:[AuthenticatedGuard]
  },
  {
    path:"departamento-editar/:id",
    component: DepartamentoEditarComponent
  },
  {
    path:"departamento-listar",
    component: DepartamentoListarComponent
  },
  {
    path:"departamento-remover/:id",
    component: DepartamentoRemoverComponent
  },
  {
    path:"facultad-crear",
    component: FacultadCrearComponent
  },
  {
    path:"facultad-editar/:id",
    component: FacultadEditarComponent
  },
  {
    path:"facultad-listar",
    component: FacultadListarComponent
  },
  {
    path:"facultad-remover/:id",
    component: FacultadRemoverComponent
  },
  {
    path:"modalidad-crear",
    component: ModalidadCrearComponent
  },
  {
    path:"modalidad-editar/:id",
    component: ModalidadEditarComponent
  },
  {
    path:"modalidad-listar",
    component: ModalidadListarComponent
  },
  {
    path:"modalidad-remover/:id",
    component: ModalidadRemoverComponent
  },
  {
    path:"recordatorio-crear",
    component: RecordatorioCrearComponent
  },
  {
    path:"recordatorio-editar/:id",
    component: RecordatorioEditarComponent
  },
  {
    path:"recordatorio-listar",
    component: RecordatorioListarComponent
  },
  {
    path:"recordatorio-remover/:id",
    component: RecordatorioRemoverComponent
  },
  {
    path:"comite-crear",
    component: ComiteCrearComponent
  },
  {
    path:"comite-editar/:id",
    component: ComiteEditarComponent
  },
  {
    path:"comite-listar",
    component: ComiteListarComponent
  },
  {
    path:"comite-remover/:id",
    component: ComiteRemoverComponent
  },
  {
    path:"tsolicitud-crear",
    component: TsolicitudCrearComponent
  },
  {
    path:"tsolicitud-editar/:id",
    component: TsolicitudEditarComponent
  },
  {
    path:"tsolicitud-listar",
    component: TsolicitudListarComponent
  },
  {
    path:"tsolicitud-remover/:id",
    component: TsolicitudRemoverComponent
  },
  {
    path:"investigacion-crear",
    component: InvestigacionCrearComponent
  },
  {
    path:"investigacion-editar/:id",
    component: InvestigacionEditarComponent
  },
  {
    path:"investigacion-listar",
    component: InvestigacionListarComponent
  },
  {
    path:"investigacion-remover/:id",
    component: InvestigacionRemoverComponent
  },
  {
    path:"vinculacion-crear",
    component: VinculacionCrearComponent
  },
  {
    path:"vinculacion-editar/:id",
    component: VinculacionEditarComponent
  },
  {
    path:"vinculacion-listar",
    component: VinculacionListarComponent
  },
  {
    path:"vinculacion-remover/:id",
    component: VinculacionRemoverComponent
  },
  {
    path:"jurado-crear",
    component: JuradoCrearComponent
  },
  {
    path:"jurado-editar/:id",
    component: JuradoEditarComponent
  },
  {
    path:"jurado-listar",
    component: JuradoListarComponent
  },
  {
    path:"jurado-remover/:id",
    component: JuradoRemoverComponent
  },
  {
    path:"proponente-crear",
    component: ProponenteCrearComponent,
    canActivate:[AuthenticatedGuard]
  },
  {
    path:"proponente-editar/:id",
    component: ProponenteEditarComponent,
    canActivate:[AuthenticatedGuard]
  },
  {
    path:"proponente-listar",
    component: ProponenteListarComponent,
    canActivate:[AuthenticatedGuard]
  },
  {
    path:"proponente-remover/:id",
    component: ProponenteRemoverComponent
  },
  {
    path:"csolicitud-crear",
    component: CsolicitudCrearComponent
  },
  {
    path:"csolicitud-editar/:id",
    component: CsolicitudEditarComponent
  },
  {
    path:"csolicitud-listar",
    component: CsolicitudListarComponent
  },
  {
    path:"csolicitud-remover",
    component: CsolicitudRemoverComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
