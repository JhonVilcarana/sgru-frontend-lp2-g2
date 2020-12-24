import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Niv_comp_cur } from 'src/app/models/asignacion/niv_comp_cur/niv_comp_cur';
import { Global } from 'src/app/services/global';

@Injectable({
  providedIn: 'root'
})
export class NivCompCurService {
  urlniv_comp_cur = Global.url + 'nivel_competencias_curso';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getasignaciones(): Observable<any> {
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get(this.urlniv_comp_cur + '/all2', { headers: headers });
}
getAll():Observable<Object[]>{
  return this.http.get<Object[]>(this.urlniv_comp_cur+'/all2');
}
getAsignacion(id:number):Observable<Object> {
  return this.http.get(`${this.urlniv_comp_cur}/${id}`);
}
add(niv_comp_cur:Niv_comp_cur): Observable<number>{
  return this.http.post<number>(this.urlniv_comp_cur+"/create", niv_comp_cur, {headers:this.httpHeaders});
}

delete(id:number): Observable<number>{
  return this.http.delete<number>(this.urlniv_comp_cur+"/delete/" + id,{headers:this.httpHeaders});
}

update(niv_comp_cur: Niv_comp_cur):Observable<number> {
  return this.http.put<number>(`${this.urlniv_comp_cur}/update/${niv_comp_cur.nivel_competencias_curso_id}`, niv_comp_cur,{headers:this.httpHeaders});
}
getasignacionesAll():Observable<Object[]>{
  return this.http.get<Object[]>(this.urlniv_comp_cur+'/all2');
}

getCursos():Observable<Object[]>{
  return this.http.get<Object[]>(this.urlniv_comp_cur+'/cur');
}
getCompetencias():Observable<Object[]>{
  return this.http.get<Object[]>(this.urlniv_comp_cur+'/comp');
}
getNiveles():Observable<Object[]>{
  return this.http.get<Object[]>(this.urlniv_comp_cur+'/niv');
}






}