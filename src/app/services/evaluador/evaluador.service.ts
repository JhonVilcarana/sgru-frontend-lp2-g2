import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evaluador } from 'src/app/models/evaluador/evaluador';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class EvaluadorService {
  urlEvaluador = Global.url + 'evaluador';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getEvaluadores(): Observable<Evaluador[]> {
    return this.http.get<Evaluador[]>(this.urlEvaluador + '/all');
  }
  getDocentes(): Observable<Evaluador[]> {
    return this.http.get<Evaluador[]>(this.urlEvaluador + '/docente/all');
  }
  getExternos(): Observable<Evaluador[]> {
    return this.http.get<Evaluador[]>(this.urlEvaluador + '/externo/all');
  }
  getExpertos(): Observable<Evaluador[]> {
    return this.http.get<Evaluador[]>(this.urlEvaluador + '/experto/all');
  }
  getHabilidades(): Observable<Evaluador[]> {
    return this.http.get<Evaluador[]>(this.urlEvaluador + '/habilidad/all');
  }
  getEvaluador(id: number): Observable<Object> {
    return this.http.get(`${this.urlEvaluador}/${id}`);
  }
  addEvaluador(evaluador: Evaluador): Observable<number> {
    console.log(evaluador);
    return this.http.post<number>(this.urlEvaluador + '/create', evaluador, { headers: this.httpHeaders });
  }
  updateEvaluador(evaluador: Evaluador): Observable<number> {
    return this.http.put<number>(`${this.urlEvaluador}/update/${evaluador.persona_id}`, evaluador, { headers: this.httpHeaders });
  }
  deleteEvaluador(id: number): Observable<number> {
    console.log(id);
    console.log(this.urlEvaluador);
    return this.http.delete<number>(this.urlEvaluador + "/delete/" + id, { headers: this.httpHeaders });
  }
}
