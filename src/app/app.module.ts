import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ListadoComponent } from './listado/listado.component';
import { ToledoComponent } from './toledo/toledo.component';
import { MadridComponent } from './madrid/madrid.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
//import { ValidaContraDirective } from './validador/valida-contra.directive';
 
@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    ListadoComponent,
    ToledoComponent,
    MadridComponent//,
//    ValidaContraDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
