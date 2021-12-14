import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/template/header/header.component';
import { NavbarComponent } from './public/template/navbar/navbar.component';
import { FooterComponent } from './public/template/footer/footer.component';
import { InternalServerErrorComponent } from './public/error/internal-server-error/internal-server-error.component';
import { HomeComponent } from './public/general/home/home.component';
import { NotFoundComponent } from './public/error/not-found/not-found.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddTokenService } from './interceptors/add-token.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    InternalServerErrorComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AddTokenService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
