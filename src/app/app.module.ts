import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materialmodule/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import{LayoutModule} from '@angular/cdk/layout';
import { MenuComponent } from './components/templates/menu/menu.component';
import { ListcardsComponent } from './components/cards/listcards/listcards.component';
import { ListEvaluadorComponent } from './components/evaluador/list-evaluador/list-evaluador.component';
import { AddEvaluadorComponent } from './components/evaluador/add-evaluador/add-evaluador.component';
import { ListInstrumentoComponent } from './components/instrumento/list-instrumento/list-instrumento.component';
import { LogroComponent } from './components/logro/logro.component';
import { SemestreComponent } from './components/semestre/semestre.component';
import { AddSemestreComponent } from './components/semestre/add-semestre/add-semestre.component';
import { ListSemestreComponent } from './components/semestre/list-semestre/list-semestre.component';
import { ListLogroComponent } from './components/logro/list-logro/list-logro.component';
import { SemestreService } from './services/semestre/semestre.service';
import { ListAsigComponent } from './components/asignacion/list-asig/list-asig.component';
import { AsignacionService } from './services/asignacion/asignacion.service';
import { AddAsigComponent } from './components/asignacion/add-asig/add-asig.component';
import { PaginatePipe } from './components/pipes/paginate.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { AddNivCompComponent } from './components/niv-comp/add-niv-comp/add-niv-comp.component';
import { ListNivCompComponent } from './components/niv-comp/list-niv-comp/list-niv-comp.component';
import { NivCompService } from './services/niv_comp/niv-comp.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListcardsComponent,
    ListEvaluadorComponent,
    AddEvaluadorComponent,
    ListInstrumentoComponent,
    LogroComponent,
    SemestreComponent,
    AddSemestreComponent,
    ListSemestreComponent,
    ListLogroComponent,
    ListAsigComponent,
    AddAsigComponent,
    PaginatePipe,
    AddNivCompComponent,
    ListNivCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    SemestreService,
    AsignacionService,
    NivCompService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
