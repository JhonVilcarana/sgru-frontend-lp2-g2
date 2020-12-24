import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListcardsComponent } from './components/cards/listcards/listcards.component';
import { ListEvaluadorComponent } from './components/evaluador/list-evaluador/list-evaluador.component';
import { ListInstrumentoComponent } from './components/instrumento/list-instrumento/list-instrumento.component';
import { ListSemestreComponent} from './components/semestre/list-semestre/list-semestre.component';
import { ListLogroComponent} from './components/logro/list-logro/list-logro.component';
import { ListAsigComponent } from './components/asignacion/list-asig/list-asig.component';
import {ListNivCompComponent} from './components/niv-comp/list-niv-comp/list-niv-comp.component';

const routes: Routes = [
  { path: 'instrumento', component: ListInstrumentoComponent },
  { path: 'listevaluador', component: ListEvaluadorComponent },
  { path: 'listsemestre', component: ListSemestreComponent},
  { path: 'listasig', component: ListAsigComponent},
  { path: 'listlogro', component: ListLogroComponent},
  { path: 'listcards', component: ListcardsComponent },
  { path: 'listnivcomp', component: ListNivCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
