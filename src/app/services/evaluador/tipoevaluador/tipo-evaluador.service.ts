import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoEvaluador } from 'src/app/models/evaluador/tipoevaluador/tipo-evaluador';
import { Global } from '../../global';

@Injectable({
  providedIn: 'root'
})
export class TipoEvaluadorService {
  urlTipoEvaluador = Global.url + 'tipoevaluador';
  constructor(private http: HttpClient) { }

  getTipoEvaluadores(): Observable<TipoEvaluador[]> {
    return this.http.get<TipoEvaluador[]>(this.urlTipoEvaluador + '/all');
  }
}
