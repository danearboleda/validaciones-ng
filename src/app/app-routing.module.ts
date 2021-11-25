import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './public/error/not-found/not-found.component';
import { HomeComponent } from './public/general/home/home.component';

const routes: Routes = [
  {
    path:"home",
    component: HomeComponent
  },{
    path:"",
    pathMatch:"full",
    redirectTo:"/home"
  },{
    path:"security",
    loadChildren: () => import("./modules/security/security.module").then(x => x.SecurityModule)
  },{
    path:"parameters",
    loadChildren: () => import("./modules/parameters/parameters.module").then(x => x.ParametersModule)
  },{
    path:"solicitudes",
    loadChildren: () => import("./modules/solicitudes/solicitudes.module").then(x => x.SolicitudesModule)
  },{
    path:"reportes",
    loadChildren: () => import("./modules/reportes/reportes.module").then(x => x.ReportesModule)
  },{
    path:"**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
