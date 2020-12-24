import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDocumento } from 'src/app/models/evaluador/tipodocumento/tipo-documento';
import { Global } from '../../global';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  urlTipoDocumento = Global.url + 'tipodoc';
  constructor(private http: HttpClient) { }
  getTipoDocumentos(): Observable<TipoDocumento[]> {
    return this.http.get<TipoDocumento[]>(this.urlTipoDocumento + '/all');
  }
}
