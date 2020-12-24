import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asignacion } from 'src/app/models/asignacion/asignacion';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {
  urlCurso = Global.url + 'curso';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(private http: HttpClient) { }
  
  getCursos(): Observable<any> {
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get(this.urlCurso + '/all', { headers: headers });
}
deleteCurso(id: number): Observable<number> {
  console.log(id);
  console.log(this.urlCurso);
  return this.http.delete<number>(this.urlCurso + "/delete/" + id, { headers: this.httpHeaders });
}

add(asignacion:Asignacion): Observable<number>{
  console.log(asignacion);
  return this.http.post<number>(this.urlCurso + '/create', asignacion,{headers:this.httpHeaders})



}
}
